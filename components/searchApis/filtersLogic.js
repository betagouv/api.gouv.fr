import { normalize, findAll } from '../../utils';

export const filterTheme = selectedTheme => {
  if (!selectedTheme) {
    return () => true;
  }
  return api => api.themes.indexOf(selectedTheme) > -1;
};

export const filterAccess = noAccessRight => {
  if (!noAccessRight) {
    return () => true;
  }
  return api => api.contract === 'OUVERT';
};

const mergeResults = (previousMatches, currMatch) => {
  const len = previousMatches.length;
  if (len === 0) {
    return [currMatch];
  } else {
    const lastMatch = previousMatches[len - 1];
    if (lastMatch[1] >= currMatch[0]) {
      return [
        ...previousMatches.slice(0, len - 1),
        [lastMatch[0], Math.max(lastMatch[1], currMatch[1])],
      ];
    }
    return [...previousMatches, currMatch];
  }
};

export const computeSearchResults = searchTerms => {
  if (!searchTerms || searchTerms.length === 0) {
    return api => {
      return { ...api, score: 1 };
    };
  }

  const finders = searchTerms
    .map(normalize)
    .map(str => str.toLowerCase())
    .map(term => findAll(term))
    .map(func => text => func(normalize(text || '').toLowerCase()));

  return api => {
    const matches = finders.reduce(
      (matches, finder) => {
        return {
          title: [...matches.title, ...finder(api.title)],
          description: [...matches.description, ...finder(api.description)],
          owner: [...matches.owner, ...finder(api.owner)],
        };
      },
      { title: [], description: [], owner: [] }
    );
    // field can be boosted here
    const score =
      matches.title.length * 0.1 +
      matches.description.length * 0.1 +
      matches.owner.length * 0.1;

    // merge matches
    matches.title = matches.title.reduce(mergeResults, []);
    matches.description = matches.description.reduce(mergeResults, []);
    matches.owner = matches.owner.reduce(mergeResults, []);

    return { ...api, score, matches };
  };
};

export const textHighlighter = (matches = [], text = '') => {
  if (!text) {
    return;
  }
  let previousIdx = 0;
  let newText = '';
  matches.forEach(([start, end]) => {
    newText += text.slice(previousIdx, start);
    newText += `<span style='background-color:yellow'>${text.slice(
      start,
      end
    )}</span>`;

    previousIdx = end;
  });
  newText += text.slice(previousIdx);
  return newText;
};

export default {
  filterAccess,
  filterTheme,
  computeSearchResults,
  textHighlighter,
};

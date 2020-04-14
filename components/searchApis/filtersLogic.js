import { isEmpty } from 'lodash';
import { normalize, findAll } from '../../utils';

export const filterTheme = selectedTheme => {
  if (!selectedTheme) {
    return () => true;
  }
  return api => api.themes.includes(selectedTheme);
};

export const filterAccess = noAccessRight => {
  if (!noAccessRight) {
    return () => true;
  }
  return api => api.contract === 'OUVERT';
};

/**
 * Check if two consecutive matches overlap and if they do, merge them
 * @param {*} previousMatches
 * @param {*} currentMatch
 */
const mergeMatchesPosition = (previousMatches, currentMatch) => {
  const len = previousMatches.length;
  if (len === 0) {
    return [currentMatch];
  }

  const lastMatch = previousMatches[len - 1];
  if (lastMatch[1] >= currentMatch[0]) {
    return [
      ...previousMatches.slice(0, len - 1),
      [lastMatch[0], Math.max(lastMatch[1], currentMatch[1])],
    ];
  }
  return [...previousMatches, currentMatch];
};

/**
 * Search needles in haystack and returns a list of matches (duplets [start, end])
 * @param {*} searchTerms
 */
export const computeSearchResults = needles => {
  if (isEmpty(needles)) {
    return api => {
      return { ...api, score: 1 };
    };
  }

  const finders = needles
    .map(normalize)
    .map(str => str.toLowerCase())
    .map(findAll)
    .map(func => text => func(normalize(text || '').toLowerCase()));

  return api => {
    const matches = finders.reduce(
      (matches, finder) => {
        return {
          title: [...matches.title, ...finder(api.title)],
          description: [...matches.description, ...finder(api.description)],
          owner: [...matches.owner, ...finder(api.owner)],
          owner_acronym: [
            ...matches.owner_acronym,
            ...finder(api.owner_acronym || ''),
          ],
          keywords: [
            ...matches.keywords,
            ...finder(api.keywords.join(', ') || ''),
          ],
        };
      },
      { title: [], description: [], owner: [], owner_acronym: [], keywords: [] }
    );
    // field can be boosted here
    const score =
      matches.title.length * 0.1 +
      matches.description.length * 0.1 +
      matches.owner.length * 0.1 +
      matches.keywords.length * 0.1 +
      matches.owner_acronym.length * 0.1;

    // merge matches
    matches.title = matches.title.reduce(mergeMatchesPosition, []);
    matches.description = matches.description.reduce(mergeMatchesPosition, []);
    matches.owner = matches.owner.reduce(mergeMatchesPosition, []);

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

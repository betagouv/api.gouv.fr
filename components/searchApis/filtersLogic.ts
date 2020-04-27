import { isEmpty } from 'lodash';
import { normalizeAndfindAll } from '../../utils';
import { IApi } from '../../model';

export const filterTheme = (selectedTheme: string | null) => {
  if (!selectedTheme) {
    return () => true;
  }
  return (api: IApi) => api.themes.includes(selectedTheme);
};

export const filterAccess = (noAccessRight: boolean) => {
  if (!noAccessRight) {
    return () => true;
  }
  return (api: IApi) => api.is_open;
};

/**
 * Check if two consecutive matches overlap and if they do, merge them
 * @param {*} previousMatches
 * @param {*} currentMatch
 */
const mergeMatchesPosition = (
  previousMatches: number[][],
  currentMatch: number[]
) => {
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

export interface ISearchMatch {
  title: number[][];
  tagline: number[][];
  owner: number[][];
  owner_acronym: number[][];
  keywords: number[][];
}

/**
 * Search needles in haystack and returns a list of matches (duplets [start, end])
 * @param {*} searchTerms
 */
export const computeSearchResults = (needles: string[]) => {
  if (isEmpty(needles)) {
    // if no needles to find, then every api is a relevant result
    return (api: IApi) => {
      return { ...api, score: 1 };
    };
  }

  const finders = needles.map(normalizeAndfindAll);

  return (api: IApi) => {
    const matches = finders.reduce(
      (matches: ISearchMatch, finder: (item: string) => number[][]) => {
        return {
          title: [...matches.title, ...finder(api.title)],
          tagline: [...matches.tagline, ...finder(api.tagline)],
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
      { title: [], tagline: [], owner: [], owner_acronym: [], keywords: [] }
    );
    // field can be boosted here
    const score =
      matches.title.length * 0.1 +
      matches.tagline.length * 0.1 +
      matches.owner.length * 0.1 +
      matches.keywords.length * 0.1 +
      matches.owner_acronym.length * 0.1;

    // merge matches
    matches.title = matches.title.reduce(mergeMatchesPosition, []);
    matches.tagline = matches.tagline.reduce(mergeMatchesPosition, []);
    matches.owner = matches.owner.reduce(mergeMatchesPosition, []);

    return { ...api, score, matches };
  };
};

export const textHighlighter = (matches: number[][] | undefined, text = '') => {
  if (!text) {
    return '';
  }
  if (!matches) {
    return text;
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

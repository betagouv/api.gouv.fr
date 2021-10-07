import { isEmpty } from 'lodash';
import { normalizeAndfindAll } from '../../utils';
import { IApi } from '../../model';
import stopwords from './stopwords';

export const filterTheme = (selectedTheme: string | null) => {
  if (!selectedTheme) {
    return () => true;
  }
  return (api: IApi) => api.themes.includes(selectedTheme);
};

export enum API_ACCESS_TYPE {
  ALL = '',
  OPEN = 'open',
  NOT_OPEN = 'notOpen',
  FRANCE_CONNECT = 'franceConnect',
}

export const filterAccess = (APIType: API_ACCESS_TYPE) => {
  if (APIType === API_ACCESS_TYPE.OPEN) {
    return (api: IApi) => api.is_open !== -1;
  } else if (APIType === API_ACCESS_TYPE.NOT_OPEN) {
    return (api: IApi) => api.is_open === -1;
  } else if (APIType === API_ACCESS_TYPE.FRANCE_CONNECT) {
    return (api: IApi) =>
      api.is_france_connected === 1 || api.is_france_connected === 2;
  }
  return () => true;
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
  // exclude stopwords
  let relevantNeedles = needles.filter(
    needle => stopwords.indexOf(needle) === -1
  );

  if (isEmpty(relevantNeedles)) {
    // if no relevant needles, lets look for the needles
    relevantNeedles = needles;
  }

  if (isEmpty(relevantNeedles)) {
    // if no needles to find, then every api is a relevant result
    return (api: IApi) => {
      return { ...api, score: 1 };
    };
  }

  const finders = relevantNeedles.map(normalizeAndfindAll);

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
      {
        title: [],
        tagline: [],
        owner: [],
        owner_acronym: [],
        keywords: [],
      }
    );
    // field can be boosted here
    const score =
      matches.title.length * 0.4 +
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

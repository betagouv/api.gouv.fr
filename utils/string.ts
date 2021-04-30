import { escapeRegExp } from 'lodash';

/**
 * Replaces all occurrences of find in a string
 * @param {*} str
 * @param {*} find
 * @param {*} replace
 */
export const replaceAll = (
  str: string,
  find: string | RegExp,
  replace: string
) => {
  return str.replace(new RegExp(find, 'g'), replace);
};

/**
 * Find all occurrences of needle in a string
 */
export const findAll = (needle: string) => {
  if (needle === '') {
    return () => [];
  }
  const regex = new RegExp(`${escapeRegExp(needle)}`, 'g');

  return (haystack: string) => {
    let result;
    let indices = [];
    while ((result = regex.exec(haystack || ''))) {
      indices.push([result.index, result.index + needle.length]);
    }
    return indices;
  };
};

/**
 * Find all occurences of a normalized needle in a normalised string
 */
export const normalizeAndfindAll = (needle: string) => {
  const normalizedNeedle = normalize(needle || '').toLowerCase();
  const finder = findAll(normalizedNeedle);

  return (haystack: string) => {
    const normalizedHaystack = normalize(haystack || '').toLowerCase();
    return finder(normalizedHaystack);
  };
};

/**
 * Normalize string
 * See: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
 *
 * -> normalize()ing to NFD Unicode normal form decomposes combined graphemes into the combination of simple ones. The è ends up expressed as e + ̀.
 * -> Using a regex character class to match the U+0300 → U+036F range to get rid of the diacritics
 */
export const normalize = (str: string) => {
  try {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  } catch {
    // IE 11 and older browser cannot support normalize.
    // A search with diacritics is still better than no search at all
    return str;
  }
};

export const uuid = (size = 7) => {
  return Math.random().toString(36).substring(size);
};

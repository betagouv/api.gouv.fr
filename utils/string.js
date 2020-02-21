import { escapeRegExp } from 'lodash';

/**
 * Replaces all occurences of find in a string
 * @param {*} str
 * @param {*} find
 * @param {*} replace
 */
export const replaceAll = (str, find, replace) => {
  return str.replace(new RegExp(find, 'g'), replace);
};

/**
 * Find all occurences of needle in a string
 */
export const findAll = needle => {
  if (needle === '') {
    return () => [];
  }
  const regex = new RegExp(`${escapeRegExp(needle)}`, 'g');

  return (haystack = '') => {
    let result;
    let indices = [];
    while ((result = regex.exec(haystack))) {
      indices.push([result.index, result.index + needle.length]);
    }
    return indices;
  };
};

/**
 * Normalize string
 * See: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
 *
 * -> normalize()ing to NFD Unicode normal form decomposes combined graphemes into the combination of simple ones. The è ends up expressed as e + ̀.
 * -> Using a regex character class to match the U+0300 → U+036F range to get rid of the diacritics
 */
export const normalize = str => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

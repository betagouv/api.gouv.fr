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
 * Find all occurences of find in a string
 * @param {*} str
 * @param {*} find
 * @param {*} replace
 */
export const findAll = find => {
  if (find === '') {
    return () => [];
  }
  const regex = new RegExp(`${find}`, 'g');

  return (str = '') => {
    let result;
    let indices = [];
    while ((result = regex.exec(str))) {
      indices.push([result.index, result.index + find.length]);
    }
    return indices;
  };
};

/**
 * Generate random id
 */
export const randomId = (length = 10) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const normalize = str => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

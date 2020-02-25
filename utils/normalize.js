import { deburr } from 'lodash';

export const normaliseStr = str => {
  return deburr(str).toLowerCase();
};

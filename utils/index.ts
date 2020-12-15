import {
  replaceAll,
  findAll,
  normalize,
  normalizeAndfindAll,
  uuid,
} from './string';
import { isElementVisible, getWindowHash } from './browser';
import { roundUptime, getUptimeState } from './uptime';

const monthDifference = (d1: Date, d2: Date) => {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};

export {
  replaceAll,
  isElementVisible,
  getWindowHash,
  roundUptime,
  getUptimeState,
  findAll,
  normalizeAndfindAll,
  normalize,
  uuid,
  monthDifference,
};

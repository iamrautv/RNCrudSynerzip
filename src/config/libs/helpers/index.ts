import * as T from './types';
import * as CT from '../../commondTypes';

/**
 * @fileoverview Generic app helper function
 * @package
 */

/**
 * Convert array in chunk of sub-arrays
 */
const chunkArray = (myArray: any[], chunkSize: number): any[] => {
  let index = 0;
  const arrayLength = myArray.length;
  const tempArray = [];

  for (index = 0; index < arrayLength; index += chunkSize) {
    const myChunk = myArray.slice(index, index + chunkSize);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
};

/**
 * Convert a string to a key to pass as identifier
 * for the components
 * @param {string} str is a string which to be converted as a kwy
 */
const strToKey = (str: string): string => {
  if (!str) return String(str);

  let newStr = '';
  const arr = str.split(' ');
  newStr = arr.join('_');
  return String(newStr.toLocaleLowerCase());
};


/**
 * Function is used to delay execution of next line by time
 * @param {int} time is number in milisecconds
 */
const manualDelay = (time?: number): Promise<number> => new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, time || 500);
});


/**
 * Function give pure date and restore time in provided timestamp
 * @param {str} str is timestamp string
 */
const dateWithoutTime = (str: string): number => {
  const d: Date = new Date(str);
  d.setHours(0, 0, 0, 0);
  const time = d.getTime();
  return time;
};

/**
 * Create dynamic aspect ratio of image by taking its height and width
 * @param {int} val is division of image as => width/height
 * @param {int} lim limit of ratio of image
 */
const aspectRatio = (val: number, lim: number): number[] => {
  let lower = [0, 1];
  let upper = [1, 0];

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const mediant = [lower[0] + upper[0], lower[1] + upper[1]];

    if (val * mediant[1] > mediant[0]) {
      if (lim < mediant[1]) {
        return upper;
      }
      lower = mediant;
    } else if (val * mediant[1] === mediant[0]) {
      if (lim >= mediant[1]) {
        return mediant;
      }
      if (lower[1] < upper[1]) {
        return lower;
      }
      return upper;
    } else {
      if (lim < mediant[1]) {
        return lower;
      }
      upper = mediant;
    }
  }
};

/**
 * Check if object is empty
 */
const isEmptyObject = (obj: CT.MetaObj): boolean => {
  if (!obj) {
    return true;
  }
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

/**
 * Changing app header key or adding key's to header for api request
 */
const buildHeader = (headerParams: CT.ApiHeader = {}): CT.ApiHeader => {
  let header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  };
  header = { ...header, ...headerParams };
  return header;
};

export {
  chunkArray,
  strToKey,
  manualDelay,
  dateWithoutTime,
  aspectRatio,
  isEmptyObject,
  buildHeader
};

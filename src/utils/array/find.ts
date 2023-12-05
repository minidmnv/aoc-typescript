import { SearchResult } from '../type';

// eslint-disable-next-line no-unused-vars
export const findFirstMatchingElement = (array: string[], test: (val: string) => boolean, maxIndex?: number): SearchResult | undefined => {
  const length = maxIndex && maxIndex < array.length ? maxIndex : array.length;
  for (let i = 0; i < length; i++) {
    const arrayKey = array[i];
    if (test(arrayKey)) {
      console.log('first', arrayKey);
      return {
        index: i,
        result: arrayKey,
      };
    }
  }

  return undefined;
};

// eslint-disable-next-line no-unused-vars
export const findLastMatchingElement = (array: string[], test: (val: string) => boolean, minIndex?: number): SearchResult | undefined => {
  const length = minIndex && minIndex < array.length ? minIndex : array.length;
  for (let i = 0; i < length; i++) {
    const arrayKey = array[array.length - 1 - i];
    if (test(arrayKey)) {
      console.log('last', arrayKey);
      return {
        index: array.length - 1 - i,
        result: arrayKey,
      };
    }
  }

  return undefined;
};

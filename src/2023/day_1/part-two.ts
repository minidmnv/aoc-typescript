import { findOneOfInString, parseTextFile, SearchResult } from '../../utils';
import { findFirstMatchingElement, findLastMatchingElement } from '../../utils/array';

const NUMBERS = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
} as const;
const numbers = Object.keys(NUMBERS);

function getFirstPartOfNumber(stringFound: SearchResult[], firstNumberFound: SearchResult) {
  return stringFound.length > 0 && stringFound[0]?.index < firstNumberFound?.index!
    ? NUMBERS[stringFound[0].result as keyof typeof NUMBERS]
    : firstNumberFound?.result!;
}

function getSecondPartOfNumber(stringFound: SearchResult[], lastNumberFound: SearchResult) {
  const stringsFoundLength = stringFound.length - 1;
  return stringsFoundLength >= 0 && stringFound[stringsFoundLength]?.index > lastNumberFound?.index!
    ? NUMBERS[stringFound[stringsFoundLength].result as keyof typeof NUMBERS]
    : lastNumberFound?.result!;
}

export const dayOnePartTwo = () => {
  const calibrationLines = parseTextFile('./src/2023/day_1/input.txt', 'line').filter((val) => val.trim().length > 0);

  return calibrationLines
    .map((calibrationLine) => {
      const calibrationLineSplit = calibrationLine.split('');

      const firstNumberFound = findFirstMatchingElement(calibrationLineSplit, (value) => !isNaN(Number.parseInt(value)));
      const lastNumberFound = findLastMatchingElement(calibrationLineSplit, (value) => !isNaN(Number.parseInt(value)));
      const stringFound = findOneOfInString(numbers, calibrationLine).sort((a, b) => a.index - b.index);

      const num = Number.parseInt(
        [getFirstPartOfNumber(stringFound, firstNumberFound!), getSecondPartOfNumber(stringFound, lastNumberFound!)].reduce(
          (sum, current) => sum + current,
          '',
        ),
      );

      return num;
    })
    .reduce((sum, value) => sum + value, 0);
};

console.log(dayOnePartTwo());

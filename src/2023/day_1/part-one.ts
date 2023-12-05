import { parseTextFile } from '../../utils';
import { findFirstMatchingElement, findLastMatchingElement } from '../../utils/array';

export const dayOnePartOne = () => {
  const calibrationLines = parseTextFile('./src/2023/day_1/input.txt', 'line').filter((val) => val.trim().length > 0);

  return calibrationLines
    .map((calibrationLine) => {
      const calibrationLineSplit = calibrationLine.split('');

      const num = Number.parseInt(
        [
          findFirstMatchingElement(calibrationLineSplit, (value) => !isNaN(Number.parseInt(value)))?.result!,
          findLastMatchingElement(calibrationLineSplit, (value) => !isNaN(Number.parseInt(value)))?.result!,
        ].reduce((sum, current) => sum + current, ''),
      );

      return num;
    })
    .reduce((sum, value) => sum + value, 0);
};

console.log(dayOnePartOne());

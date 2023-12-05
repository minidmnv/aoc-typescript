import * as fs from 'fs';

const parseMode = {
  line: 'line',
  space: 'space',
} as const;
type ParseMode = keyof typeof parseMode;

export const parseTextFile = (filePath: string, mode: ParseMode): string[] => {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    switch (mode) {
      case parseMode.line:
        return fileContent.split('\n').map((line) => line.trim());
      case parseMode.space:
        return fileContent.split(' ').map((item) => item.trim());
      default:
        throw new Error('Invalid parse mode');
    }
  } catch (error) {
    // @ts-ignore
    console.error(`Error reading or parsing the file: ${error.message}`);
    return [];
  }
};

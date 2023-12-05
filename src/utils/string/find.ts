import { SearchResult } from '../type';

export const findInStringRecursive = (phrase: string, sentence: string, searchResult: SearchResult[], position?: number): SearchResult[] => {
  const foundIndex = sentence.indexOf(phrase, position);
  console.log('findInStringRecursive', phrase, foundIndex);
  if (foundIndex >= 0) {
    searchResult.push({
      index: foundIndex,
      result: phrase,
    });
    return findInStringRecursive(phrase, sentence, searchResult, foundIndex + 1);
  }

  return searchResult;
};

export const findOneOfInString = (searchPhrases: string[], sentence: string): SearchResult[] => {
  console.log(searchPhrases, sentence);
  const results: SearchResult[] = [];
  for (const searchPhrase in searchPhrases) {
    results.push(...findInStringRecursive(searchPhrases[searchPhrase], sentence, []));
  }
  console.log(results);
  return results;
};

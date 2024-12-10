'use strict';

const letterCombinations = require('./letter-combo-from-keypad');

describe('letterCombinations', () => {
  it ('returns [] when digits is empty', () => {
    expect(letterCombinations('')).toEqual([]);
  });

  it ('returns ["a", "b", "c"] when digits is "2"', () => {
    expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
  });

  it ('returns ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] when digits is "23"', () => {
    expect(letterCombinations('23')).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
  });
});
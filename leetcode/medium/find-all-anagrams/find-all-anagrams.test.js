'use strict';

const findAnagrams = require('./find-all-anagrams');

describe('findAnagrams', () => {
  it ('returns the starting indices of all anagrams of p in s', () => {
    expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6]);
    expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2]);
  });
});
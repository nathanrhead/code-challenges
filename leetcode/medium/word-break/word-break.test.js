'use strict';

const { wordBreak } = require('./word-break');

describe('wordBreak', () => {
  // it ('should return true', () => {
  //   const s = 'leetcode';
  //   const wordDict = ['leet', 'code'];
  //   expect(wordBreak(s, wordDict)).toBe(true);
  // });

  // it ('should return true', () => {
  //   const s = 'applepenapple';
  //   const wordDict = ['apple', 'pen'];
  //   expect(wordBreak(s, wordDict)).toBe(true);
  // });

  it ('should return true', () => {
    const s = "bb", wordDict = ["a","b","bbb","bbbb"];
    expect(wordBreak(s, wordDict)).toBe(true);
  });

  // it ('should return false', () => {
  //   const s = 'catsandog';
  //   const wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];
  //   expect(wordBreak(s, wordDict)).toBe(false);
  // });

  // it ('should return false', () => {
  //   const s = 'cars';
  //   const wordDict = ['car', 'ca', 'rs'];
  //   expect(wordBreak(s, wordDict)).toBe(false);
  // });
});
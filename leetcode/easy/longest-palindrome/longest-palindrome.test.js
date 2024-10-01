'use strict';

const solution = require('./longest-palindrome');

describe('leetcode challenge to determine the length of the longest possible palindrome', () => {
  it ('returns the length of the longest possible palindrome', () => {
    expect(solution("abccccdd")).toEqual(7);
    expect(solution("a")).toEqual(1);
    expect(solution('')).toEqual(0);
    expect(solution('abcdcdefgf')).toEqual(7);
  });
});
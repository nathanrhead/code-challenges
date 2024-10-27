'use strict';

const solution = require('./longest-palindrome');

describe ('LeetCode challenge to determine the longest palindrome found as a substring in a give string', () => {
  it ('returns the longest palindrome', () => {
    expect(solution('babad')).toEqual('aba'); // Could also be 'bab'.
    expect(solution('cbbd')).toEqual('bb');
    expect(solution('aaaaaaa')).toEqual('aaaaaaa');
  });
});

'use strict';

const solution = require('./ransom-note');

describe ('leetcode challenge to build a queue from a stack', () => {
  it ('returns true when a string is a palindrome', () => {
    expect(solution('a', 'b')).toBeFalsy();
    expect(solution('aa', 'ab')).toBeFalsy();
    expect(solution('aa', 'aab')).toBeTruthy();
  });
});

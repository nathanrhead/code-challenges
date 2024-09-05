'use strict';

const solution = require('./valid-parentheses');

describe ('leetcode challenge: valid parentheses', () => {
  it ('returns true when the number of opening brackets equals the number of closing brackets', () => {
    const test1 = '()';
    const test2 = '()[]{}';
    expect(solution(test1)).toBeTruthy();
    expect(solution(test2)).toBeTruthy();
  });

  it ('returns false when the number of opening brackets does not equal the number of closing brackets', () => {
    const test = '(]';
    expect(solution(test)).toBeFalsy();
  });

  it ('returns false when an opening bracket is not properly closed with its corresponding closing bracket', () => {
    const test = '(([)])';
    expect(solution(test)).toBeFalsy();
  });
});

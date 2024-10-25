'use strict';

const solution = require('./reverse-polish-notation');

describe ('LeetCode challenge to evaluate reverse Polish notation and return the result', () => {
  it ('returns the evaluated result', () => {
    expect(solution(['2','1','+','3','*'])).toEqual(9);
    expect(solution(['4','13','5','/','+'])).toEqual(6);
    expect(solution(['10','6','9','3','+','-11','*','/','*','17','+','5','+'])).toEqual(22);
  });
});

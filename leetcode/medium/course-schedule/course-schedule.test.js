'use strict';

const solution = require('./course-schedule');

describe ('LeetCode challenge to evaluate reverse Polish notation and return the result', () => {
  it ('returns the evaluated result', () => {
    expect(solution(2, [[1,0]])).toBeTruthy();
    expect(solution(2, [[1,0],[0,1]])).toBeFalsy();
    expect(solution(4, [[1, 0], [2, 1], [3, 2]])).toBeTruthy();
  });
});

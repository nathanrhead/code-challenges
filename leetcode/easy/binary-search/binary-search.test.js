'use strict';

const solution = require('./binary-search');

describe ('leetcode challenge to find a target number in an array that\'s sorted in ascending order and return its index or -1', () => {
  it ('returns the array index of the target value', () => {
    expect(solution([-1,0,3,5,9,12], 9)).toEqual(4);
    expect(solution([-1,0,5], 0)).toEqual(1);
  });

  it ('returns -1 when the target value does not exist in the array', () => {
    expect(solution([-1,0,3,5,9,12], 2)).toEqual(-1);
    expect(solution([], 2)).toEqual(-1);
  });
});

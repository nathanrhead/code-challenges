'use strict';

const solution = require('./rotated-sorted-array-search');

describe ('LeetCode challenge to find a target in a sorted array that may or may not be rotated', () => {
  it ('returns the index of the target in the array', () => {
    expect(solution([4,5,6,7,0,1,2], 0)).toEqual(4);
  });

  it ('returns -1 when the target does not exist in the array', () => {
    expect(solution([4,5,6,7,0,1,2], 3)).toEqual(-1);
    expect(solution([1], 0)).toEqual(-1);
  });
});

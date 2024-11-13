'use strict';

const solution = require('./combination-sum');

describe ('LeetCode challenge to return all unique combinations of values from an input array that add up to a target', () => {
  it ('returns an array of arrays containing the unique combinations', () => {
    expect(solution([2,3,6,7], 7)).toEqual([[2,2,3],[7]]);
    expect(solution([2,3,5], 8)).toEqual([[2,2,2,2],[2,3,3],[3,5]] );
    expect(solution([2], 1)).toEqual([]);
  });
});

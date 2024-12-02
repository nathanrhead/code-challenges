'use strict';

const subsets = require('./subsets');

describe('subsets', () => {
  it ('returns all possible subsets', () => {
    const nums = [1, 2, 3];
    const result = subsets(nums);
    expect(result).toEqual([[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]);
  });

  it ('returns all possible subsets', () => {
    const nums = [0];
    const result = subsets(nums);
    expect(result).toEqual([[], [0]]);
  });
});
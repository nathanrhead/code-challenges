'use strict';

const partitionEqualSubsetSum = require('./partition-equal-subset-sum');

describe('partitionEqualSubsetSum', () => {
  it ('returns true when the input is divisible into two subsets with equal sums', () => {
    const nums = [1, 5, 11, 5];
    expect(partitionEqualSubsetSum(nums)).toBe(true);
  });

  it ('returns false when the input is not divisible into two subsets with equal sums', () => {
    const nums = [1,2,3,5];
    expect(partitionEqualSubsetSum(nums)).toBe(false);
  });
});
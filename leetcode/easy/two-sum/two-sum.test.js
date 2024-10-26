'use strict';

const { twoSumOne, twoSumTwo } = require('./two-sum-solution1');
const twoSum2 = require('./two-sum-solution2');

describe ('leetcode challenge two sum', () => {

  it ('returns an array of indices corredsponding to the values that, when summed, equal the target', () => {
    const nums2 = [3, 2, 4]; // Hashmap: Map { 3 => 0, 2 => 1, 4 => 2 }
    const target2 = 6; // Answer = [1, 2]
    expect(twoSumOne(nums2, target2)).toEqual([1, 2]);
    expect(twoSumTwo(nums2, target2)).toEqual([1, 2]);
    expect(twoSum2(nums2, target2)).toEqual([1, 2]);
  });

  it ('returns the expected array of indices even when the given array is comprised of the same number', () => {
    const nums1 = [3, 3]; // Hashmap: Map { 3 => [ 0, 1 ] }
    const target1 = 6; // Answer = [0, 1]
    expect(twoSumOne(nums1, target1)).toEqual([0, 1]);
    expect(twoSumTwo(nums1, target1)).toEqual([0, 1]);
    expect(twoSum2(nums1, target1)).toEqual([0, 1]);
  });

  it ('returns the expected array of indices even when the value of the array at zero is equal to half of the target, meaning that the function doesn\'t use the value of the same index twice)', () => {
    const nums3 = [3, 2, 3, 4]; // Hashmap: Map { 3 => [ 0, 2 ], 2 => 1, 4 => 3 }
    const target3 = 6; // Answer = [0, 2]
    expect(twoSumOne(nums3, target3)).toEqual([0, 2]);
    expect(twoSumTwo(nums3, target3)).toEqual([0, 2]);
    expect(twoSum2(nums3, target3)).toEqual([0, 2]);
  });

  it ('returns the expected array of indices even when the values of those indicies are identical', () => {
    const nums4 = [2, 5, 5, 5, 11]; // Hashmap: Map { 2 => 0, 5 => [ 1, 2 ], 11 => 3 }
    const target4 = 10 // Answer = [1, 2]
    expect(twoSumOne(nums4, target4)).toEqual([1, 2]);
    expect(twoSumTwo(nums4, target4)).toEqual([1, 2]);
    expect(twoSum2(nums4, target4)).toEqual([1, 2]);
  });

  it ('returns the first two viable indices even when the array is composed of other values that, when summed, would equal the target', () => {
    const nums5 = [3, 3, 3]; // Hashmap: Map { 3 => [ [ 0, 1 ], 2 ] }
    const target5 = 6; // Ansewr = [0, 1]
    expect(twoSumOne(nums5, target5)).toEqual([0, 1]);
    expect(twoSumTwo(nums5, target5)).toEqual([0, 1]);
    expect(twoSum2(nums5, target5)).toEqual([0, 1]);
  });

  it ('returns a message indicating no present solution when there are not two values in the array that, when summed, would equal the target', () => {
    const nums6 = [2, 4, 7]; 
    const target6 = 10 // Answer = error
    expect(twoSumOne(nums6, target6)).toEqual('No two-sum solution.');
    expect(twoSumTwo(nums6, target6)).toEqual('No two-sum solution.');
    expect(twoSum2(nums6, target6)).toEqual('No two-sum solution.');
  });

  it ('returns the expected array of indices even when the value of either of the indices is equal to the target itself, assuming that the other is equal to zero', () => {
    const nums7 = [9, 0]; // 
    const target7 = 9; // [0, 1];
    expect(twoSumOne(nums7, target7)).toEqual([0, 1]);
    expect(twoSumTwo(nums7, target7)).toEqual([0, 1]);
    expect(twoSum2(nums7, target7)).toEqual([0, 1]);
  });

})

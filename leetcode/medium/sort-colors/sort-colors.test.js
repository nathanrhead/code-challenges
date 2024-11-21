'use strict';

const solution = require('./sort-colors');

describe('sortColors', () => {
  test('Test case 1', () => {
    const nums = [2, 0, 2, 1, 1, 0];
    solution(nums);
    expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
  });

  test('Test case 2', () => {
    const nums = [2, 0, 1];
    solution(nums);
    expect(nums).toEqual([0, 1, 2]);
  });

  test('Test case 3', () => {
    const nums = [0];
    solution(nums);
    expect(nums).toEqual([0]);
  });

  test('Test case 4', () => {
    const nums = [1];
    solution(nums);
    expect(nums).toEqual([1]);
  });
});

'use strict';

const solution = require('./array-contains-duplicate');

describe ('leetcode challenge to deteremine whether any values in an array are duplicates', () => {
  it ('returns true when a duplicate value is found', () => {
    expect(solution([1,2,3,1])).toBeTruthy();
    expect(solution([1,1,1,3,3,4,3,2,4,2] )).toBeTruthy();
  });

  it ('returns false when there are no duplicate values', () => {
    expect(solution([1,2,3,4])).toBeFalsey;
  });
});

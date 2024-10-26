'use strict';

const { rob, robOptimized } = require('./house-robber');

describe ('LeetCode challenge to evaluate reverse Polish notation and return the result', () => {
  it ('returns the evaluated result', () => {
    expect(rob([1,2,3,1])).toEqual(4);
    expect(rob([2,7,9,3,1])).toEqual(12);
    expect(rob([2,1,1,2])).toEqual(4);

    expect(robOptimized([1,2,3,1])).toEqual(4);
    expect(robOptimized([2,7,9,3,1])).toEqual(12);
    expect(robOptimized([2,1,1,2])).toEqual(4);
  });
});

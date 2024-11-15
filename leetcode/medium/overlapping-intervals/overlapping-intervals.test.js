'use strict';

const solution = require('./overlapping-intervals');

describe ('LeetCode challenge to return an array of merged intervals', () => {
  it ('returns an array of arrays with merged intervals', () => {
    expect(solution([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]]);
    expect(solution([[1,4],[4,5]])).toEqual([[1,5]]);
  });
});

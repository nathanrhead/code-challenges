'use strict';

const solution = require('./insert-interval');

describe ('leetcode challenge to insert intervals into an array of arrays', () => {
  it ('returns the amended array', () => {
    expect(solution([[1,3],[6,9]], [2,5])).toEqual([[1,5],[6,9]]);
    expect(solution([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])).toEqual([[1,2],[3,10],[12,16]]);
  });
});

'use strict';

const solution = require('./k-closest');

describe ('leetcode challenge to return the k-closest points to the origin (0,0)', () => {
  it ('returns an array of arrays representing the coordinates of the k-closest points', () => {
    expect(solution([[1,3],[-2,2]], 1)).toEqual([[-2,2]]);
    expect(solution([[3,3],[5,-1],[-2,4]], 2)).toEqual([[3,3],[-2,4]]);
    expect(solution([[0,1],[1,0]], 2)).toEqual([[0,1],[1,0]]);
  });
});

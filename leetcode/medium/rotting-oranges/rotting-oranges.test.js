'use strict';

const solution = require('./rotting-oranges');

describe ('LeetCode challenge to return the number of minutes it takes for all the fresh oranges in the matrix to go rotten', () => {
  it ('returns the number of minutes or -1', () => {
    expect(solution([[2,1,1],[1,1,0],[0,1,1]])).toEqual(4);
    expect(solution([[2,1,1],[0,1,1],[1,0,1]])).toEqual(-1);
    expect(solution([[0,2]])).toEqual(0);
  });
});

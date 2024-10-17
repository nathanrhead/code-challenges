'use strict';

const solution = require('./01-matrix');

describe ('leetcode challenge to return the distance of each node from a zero in a matrix', () => {
  it ('returns a matrix indicating the distance of each node from a zero', () => {
    expect(solution([[0,0,0],[0,1,0],[0,0,0]])).toEqual([[0,0,0],[0,1,0],[0,0,0]]);
    expect(solution([[0,0,0],[0,1,0],[1,1,1]] )).toEqual([[0,0,0],[0,1,0],[1,2,1]]);
    expect(solution([[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0]])).toEqual([[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0]]);
  });
});

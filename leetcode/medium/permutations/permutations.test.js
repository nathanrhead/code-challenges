'use strict';

const solution = require('./permutations');

describe ('LeetCode challenge to return an array of arrays representing all possible permutations of an input array', () => {
  it ('returns an array of arrays with all possible permutations of an input array\'s values', () => {
    expect(solution([1,2,3])).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
    expect(solution([0,1])).toEqual([[0,1],[1,0]]);
    expect(solution([1])).toEqual([[1]]);
  });
});

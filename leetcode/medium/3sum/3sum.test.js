'use strict';

const solution = require('./3sum');

describe ('leetcode challenge to return all triplets from an array whose sum equals zero)', () => {
  it ('returns an array of arrays representing the triplets that add up to zero', () => {
    expect(solution([-1,0,1,2,-1,-4])).toEqual([[-1,-1,2],[-1,0,1]]);
    expect(solution([0,1,1])).toEqual([]);
    expect(solution([0,0,0])).toEqual([[0,0,0]]);
    expect(solution([0,0,0,0])).toEqual([[0,0,0]]);
  });
});

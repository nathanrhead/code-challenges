'use strict';

const solution = require('./number-of-islands');

describe ('leetcode challenge to return the k-closest points to the origin (0,0)', () => {
  it ('returns an array of arrays representing the coordinates of the k-closest points', () => {
    expect(solution([
      ["1","1","1","1","0"],
      ["1","1","0","1","0"],
      ["1","1","0","0","0"],
      ["0","0","0","0","0"]
    ])).toEqual(1);
    expect(solution([
      ["1","1","0","0","0"],
      ["1","1","0","0","0"],
      ["0","0","1","0","0"],
      ["0","0","0","1","1"]
    ])).toEqual(3);
    expect(solution([['0']])).toEqual(0);
    expect(solution([])).toEqual(0);
  });
});

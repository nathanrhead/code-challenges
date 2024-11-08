'use strict';

const solution = require('./number-of-islands');

describe ('leetcode challenge to find the number of islands in a matrix', () => {
  it ('returns the number of islands in a matrix', () => {
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

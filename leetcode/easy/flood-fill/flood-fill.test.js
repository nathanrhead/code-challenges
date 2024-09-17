'use strict';

const solution = require('./flood-fill');

describe ('leetcode challenge to flood fill an image with a new color', () => {
  it ('returns the modified image', () => {
    expect(solution([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)).toEqual([[2,2,2],[2,2,0],[2,0,1]]);
    expect(solution([[0,0,0],[0,0,0]], 0, 0, 0)).toEqual([[0,0,0],[0,0,0]]);
  });
});

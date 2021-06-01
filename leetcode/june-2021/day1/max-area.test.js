'use strict';

const maxArea = require('./max-area');

const noIslands = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
];
const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
];

describe ('the solution to leetcode\'s challenge to find the area of the largest \"island\" in a matrix', () => {

  it ('returns 0 when passed an empty matrix', () => {
    expect(maxArea([[]])).toEqual(0);
  });

  it ('returns 0 when passed a matrix sans 1s', () => {
    expect(maxArea(noIslands)).toEqual(0);
  });

  it ('returns the sum of all the ones--the area--of the largest \"island\" in the matrix', () => {
    expect(maxArea(grid)).toEqual(6);
  });
})

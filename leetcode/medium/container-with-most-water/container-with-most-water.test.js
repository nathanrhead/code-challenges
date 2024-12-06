'use strict';

const maxArea = require('./container-with-most-water');

describe('maxArea', () => {
  it ('should return 49', () => {
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
  });

  it ('should return 1', () => {
    expect(maxArea([1,1])).toBe(1);
  });

  it ('should return 2', () => {
    expect(maxArea([1,2,1])).toBe(2);
  });
});
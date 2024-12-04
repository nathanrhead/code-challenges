'use strict';

const uniquePaths = require('./unique-paths');

describe('uniquePaths', () => {
  it ('returns the number of unique paths', () => {
    expect(uniquePaths(3, 7)).toBe(28);
  });

  it ('returns the number of unique paths', () => {
    expect(uniquePaths(3, 2)).toBe(3);
  });
});
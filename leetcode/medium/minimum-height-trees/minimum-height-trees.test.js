'use strict';

const minimumHeightTrees = require('./minimum-height-trees');

describe('minimumHeightTrees()', () => {
  it ('returns the root of the minimum height trees', () => {
    expect(minimumHeightTrees(4, [[1, 0], [1, 2], [1, 3]])).toEqual([1]);
    expect(minimumHeightTrees(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]])).toEqual([3, 4]);
    expect(minimumHeightTrees(1, [])).toEqual([0]);
    expect(minimumHeightTrees(2, [[0, 1]])).toEqual([0, 1]);
  });
});

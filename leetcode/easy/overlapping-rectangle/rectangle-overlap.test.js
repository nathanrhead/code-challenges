'use strict';

const overlap = require('./rectagle-overlap.js');

describe ('isRectangleOverlap function', () => {

  const rec1 = [0, 1, 2, 0];
  const rec2 = [0,0, 3, 3];

  it ('returns true if rec1 and rec2 overlaps', () => {
    expect(overlap(rec1, rec2)).toBe('true');
  });

  
})
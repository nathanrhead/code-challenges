'use strict';

const overlap = require('./rectangle-overlap.js');

describe ('isRectangleOverlap function', () => {

  /* Constraints: 
  rec1[0] <= rec1[2] and rec1[1] <= rec1[3]
  rec2[0] <= rec2[2] and rec2[1] <= rec2[3]
  */

  it ('returns true if rec1 and rec2 overlaps', () => {
    const rec1 = [0, 1, 2, 2];
    const rec2 = [0, 0, 3, 3];
    expect(overlap(rec1, rec2)).toBe(true);
  });

  it ('returns false if rec1 and rec2 do not overlap', () => {
    const rec1 = [0, 0, 2, 2];
    const rec2 = [3, 3, 4, 4];
    expect(overlap(rec1, rec2)).toBe(false);
  });

  it ('returns false when the coordinates of either array create a line instead of a rectangle', () => {
    const rec1 = [0, 1, 0, 4];
    const rec2 = [0, 0, 3, 3];
    expect(overlap(rec1, rec2)).toBe(false);
  });
})
'use strict';

const overlapOne = require('./rectangle-overlap-1.js');
const overlapTwo = require('./rectangle-overlap-2');

describe ('isRectangleOverlap function', () => {

  /* Constraints: 
  rec1[0] <= rec1[2] and rec1[1] <= rec1[3]
  rec2[0] <= rec2[2] and rec2[1] <= rec2[3]
  */

  it ('returns true if rec1 and rec2 overlap', () => {
    const rec1 = [0, 1, 2, 2];
    const rec2 = [0, 0, 3, 3];
    expect(overlapOne(rec1, rec2)).toBe(true);
    expect(overlapTwo(rec1, rec2)).toBe(true);
  });

  it ('returns false if rec1 and rec2 do not overlap', () => {
    const rec1 = [0, 0, 2, 2];
    const rec2 = [3, 3, 4, 4];
    expect(overlapOne(rec1, rec2)).toBe(false);
    expect(overlapTwo(rec1, rec2)).toBe(false);
  });

  it ('returns false when the coordinates of either array create a line instead of a rectangle', () => {
    const rec1 = [0, 1, 0, 4];
    const rec2 = [0, 0, 3, 3];
    expect(overlapOne(rec1, rec2)).toBe(false);
    expect(overlapTwo(rec1, rec2)).toBe(false);
  });
})

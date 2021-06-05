'use strict';

// This is one of two solutions provide by Leetcode, which checks the position of each rectangle relative to the other, returning false if there is no overlap (e.g., rec1 is right, left, above, or below rec2) and true otherwise.

const isRectangleOverlap = (rec1, rec2) => {
  // check if either rectangle is actually a line, since a line cannot have postivie overlap anywhere
      if (rec1[0] === rec1[2] || rec1[1] === rec1[3] ||
          rec2[0] === rec2[2] || rec2[1] === rec2[3]) {
          return false;
      }

      // Return false if rec1 is left, right, below or above rec2; otherwise, true;
      return !(rec1[2] <= rec2[0] ||   // fully left of
               rec1[3] <= rec2[1] ||  // fully below
               rec1[0] >= rec2[2] ||  // fully right of
               rec1[1] >= rec2[3]);    // fully above
};

module.exports = isRectangleOverlap;

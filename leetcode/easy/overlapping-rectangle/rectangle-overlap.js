'use strict';

// This is one of Leetcode's provided solutions, which checks the position of each rectangle relative to the other, returning false if there is no overlap (e.g., rec1 is right, left, above, or below rec2) and true otherwise
// const isRectangleOverlap = (rec1, rec2) => {
//   // check if either rectangle is actually a line, since a line cannot have postivie overlap anywhere
//       if (rec1[0] === rec1[2] || rec1[1] === rec1[3] ||
//           rec2[0] === rec2[2] || rec2[1] === rec2[3]) {
//           return false;
//       }

//       // Return false if rec1 is left, right, below or above rec2; otherwise, true;
//       return !(rec1[2] <= rec2[0] ||   // fully left of
//                rec1[3] <= rec2[1] ||  // fully below
//                rec1[0] >= rec2[2] ||  // fully right of
//                rec1[1] >= rec2[3]);    // fully above
// };

/*
This is solution two from Leetcode, based on area and described as follows: "Say the area of the intersection is width * height, where width is the intersection of the rectangles projected onto the x-axis, and height is the same for the y-axis. We want both quantities to be positive.

"The width is positive when min(rec1[2], rec2[2]) > max(rec1[0], rec2[0]), that is when the smaller of the largest x-coordinates is larger than the larger of the smallest x-coordinates. The height is similar."
*/
const isRectangleOverlap = (rec1, rec2) => {
      return (Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0]) && // width > 0
              Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1]));  // height > 0
  };

module.exports = isRectangleOverlap;

'use strict';

/*
This is solution two from Leetcode, based on area and described as follows: "Say the area of the intersection is width * height, where width is the intersection of the rectangles projected onto the x-axis, and height is the same for the y-axis. We want both quantities to be positive.

"The width is positive when min(rec1[2], rec2[2]) > max(rec1[0], rec2[0]), that is when the smaller of the largest x-coordinates is larger than the larger of the smallest x-coordinates. The height is similar."

This solution looks more elegant and is certainly less code. It's also as efficient as the first solution, at 0(1) for space and time.
*/

const isRectangleOverlap2 = (rec1, rec2) => {
  return (Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0]) && // width > 0
          Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1]));  // height > 0
};

module.exports = isRectangleOverlap2;

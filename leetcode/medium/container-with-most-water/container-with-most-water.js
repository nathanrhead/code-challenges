/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(heights) {
  let left = 0, right = heights.length - 1, maxWater = 0;

  while (left < right) {
    const width = right - left;
    const height = Math.min(heights[left], heights[right]);
    maxWater = Math.max(maxWater, width * height);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
};

module.exports = maxArea;

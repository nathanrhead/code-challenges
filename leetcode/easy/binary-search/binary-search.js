/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// This is the textbook binary search algorithm, the hardest part of which is getting the equation for the middle index right. I got this from AminiCK's posted solution on LeetCode. This one beats 90% of the solutions on LeetCode in JS for time/space complexity.
const search = function(nums, target) {
  // Check for null inputs, an empty array, or a target larger than the last value of the array.
  if (!nums || (!target && target !== 0) || nums.length <= 0 || nums[nums.length - 1] < target) return -1;

  // Instantiate the low and high index variables.
  let lowIndex = 0, highIndex = nums.length - 1;

  // Loop while the low index is less than the high index.
  while (lowIndex < highIndex) {
      // Instantiate the middle index variable with the equation to calculate it.
      let middleIndex = lowIndex + Math.floor((highIndex - lowIndex + 1) / 2);

      // Reset the low or high index, depending on whether the target is greater or less than.        
      if (target < nums[middleIndex]) highIndex = middleIndex - 1;
      else lowIndex = middleIndex;
  }

  // Return the low index, if it equals the target; otherwise, return -1.
  return nums[lowIndex] === target ? lowIndex : -1;
};

module.exports = search;

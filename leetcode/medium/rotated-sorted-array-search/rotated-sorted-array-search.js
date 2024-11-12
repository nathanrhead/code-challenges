/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  if (!nums || !nums.length) return -1;

  let left = 0;
  let right = nums.length - 1;

  // The loop continues as long as left is less than or equal to right, at which point they cross each other and the search area has been exhausted.
  while (left <= right) {
    const midpoint = Math.floor((left + right) / 2);

    // Return the midpoint if its corresponding value in the array equals the target.
    if (nums[midpoint] === target) return midpoint;

    // If nums[left] <= nums[midpoint], the left half is sorted: check whether the target is in this sorted range to decide the next search range.
    if (nums[left] <= nums[midpoint]) { // Left half is sorted.
      if (nums[left] <= target && target < nums[midpoint]) right = midpoint - 1;
      else left = midpoint + 1;
    } else { // Right half is sorted.
      if (nums[midpoint] < target && target <= nums[right]) left = midpoint + 1;
      else right = midpoint - 1;
    }
  }

  // The target was not found.
  return -1;
};

module.exports = search;

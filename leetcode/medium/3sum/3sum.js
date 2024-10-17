/**
 * @param {number[]} nums
 * @return {number[][]}
*/

const threeSum = function(nums) {
  // Sort the array first. This will help us avoid duplicates and optimize our solution.
  nums.sort((a, b) => a - b);
  const results = [];

  // Iterate through the array with index i.
  for (let i = 0; i < nums.length; i++) {
    // Handle duplicates by skipping over them.
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // For each i, use two pointers (left and right) to find pairs that sum to -nums[i].
    let leftIndex = i + 1;
    let rightIndex = nums.length - 1;

    while (leftIndex < rightIndex) {
      const total = nums[i] + nums[leftIndex] + nums[rightIndex];

      if (total === 0) {
          results.push([nums[i], nums[leftIndex], nums[rightIndex]]);

          // Skip duplicates.
          while (leftIndex < rightIndex && nums[leftIndex] === nums[leftIndex + 1]) leftIndex++;
          while (leftIndex < rightIndex && nums[rightIndex] === nums[rightIndex - 1]) rightIndex--;

          leftIndex++;
          rightIndex--;
      } // Because the array is sorted, if the total is less than zero, a bigger number is needed to get to zero, so move the left pointer; if greater, a smaller number is needed, so move the right pointer.
      else if (total < 0) leftIndex++;
      else rightIndex--;
    }
  }

  return results;
};

module.exports = threeSum;

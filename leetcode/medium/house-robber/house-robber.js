/**
 * @param {number[]} nums
 * @return {number}
 */

function rob(nums) {
  // The base cases.
  if (nums.length === 0) return 0; // No house.
  if (nums.length === 1) return nums[0]; // Only one house.

  // This array holds the maximum possible values as the nums array is traversed. This is the memoized cache of the algorithm.
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  // This is the sub-problem.
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
}

function robOptimized(nums) {
  // The base cases.
  if (nums.length === 0) return 0; // No house.
  if (nums.length === 1) return nums[0]; // Only one house.

  // These variables only hold onto the last two maximums, which is all that needs to be tracked, reducing the space complexity to O(1) from O(n) in the first implementation. This is the memoized cache of the algorithm.
  let prev2Max = nums[0];
  let prev1Max = Math.max(nums[0], nums[1]);

  // This is the sub-problem.
  for (let i = 2; i < nums.length; i++) {
      const currentMax = Math.max(prev1Max, prev2Max + nums[i]);
      prev2Max = prev1Max;
      prev1Max = currentMax;
  }

  return prev1Max;
};

module.exports = { rob, robOptimized };

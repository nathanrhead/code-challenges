/**
 * @param {number[]} nums
 * @return {number}
*/

const maxSubArray = function(nums) {
  // 1.	Initialize maxSum to the first element of the array and currSum to 0.
  let maxSum = nums[0], currSum = 0;

	// 2.	Iterate through each element in the array.
  for (i = 0; i < nums.length; i++) {
    // Add the current element to currSum.
    currSum += nums[i];

    // If currSum is greater than maxSum, update maxSum.
    if (currSum > maxSum) maxSum = currSum;

    // If currSum becomes negative, reset it to 0 (since starting a new subarray from the next element may yield a larger sum).
    if (currSum < 0) currSum = 0;
  }
  
	// 3.	After processing all elements, maxSum will hold the maximum sum of any contiguous subarray.
  return maxSum;
};

// The divide-and-conquer method from ChatGPT.
const maxSubArrayDandQ = nums => {
  // Helper function to find the maximum crossing subarray
  function findMaxCrossingSubarray(nums, left, mid, right) {
    let leftSum = -Infinity; // Initialize to negative infinity
    let sum = 0;

    // Find maximum sum in the left half
    for (let i = mid; i >= left; i--) {
        sum += nums[i];

        if (sum > leftSum) {
            leftSum = sum;
        }
    }

    let rightSum = -Infinity; // Initialize to negative infinity
    sum = 0;

    // Find maximum sum in the right half
    for (let i = mid + 1; i <= right; i++) {
        sum += nums[i];
        
        if (sum > rightSum) {
            rightSum = sum;
        }
    }

    // Return the maximum crossing sum
    return leftSum + rightSum;
  }

  // Helper function for the divide and conquer approach
  function maxSubArrayHelper(nums, left, right) {
    if (left === right) {
        return nums[left]; // Base case: only one element
    }

    const mid = Math.floor((left + right) / 2);

    const leftMax = maxSubArrayHelper(nums, left, mid);
    const rightMax = maxSubArrayHelper(nums, mid + 1, right);
    const crossingMax = findMaxCrossingSubarray(nums, left, mid, right);

    return Math.max(leftMax, rightMax, crossingMax); // Combine results
  }

  return maxSubArrayHelper(nums, 0, nums.length - 1); // Start the recursion
};

module.exports = { maxSubArray, maxSubArrayDandQ };

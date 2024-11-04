/**
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelf = function(nums) {
  const result = new Array(nums.length).fill(1);
  
  // Calculate left products for each element.
  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left *= nums[i];
  }

  // Calculate right products and combine with left products.
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }
  
  // Convert all values to ensure no negative zero.
  for (let i = 0; i < nums.length; i++) {
    result[i] = result[i] === -0 ? 0 : result[i];
  }

  return result;
};

// This approach uses division, but has the same space and time comlexity. The idea here rests in the fact that the product of the array / i is the answer for each i, except when the value at i is zero, accounted for in the second for-loop.
const productExceptSelfUsingDivision = function(nums) {
  const n = nums.length;
  const result = new Array(n);
  
  // Calculate the total product.
  let totalProduct = 1;
  let zeroCount = 0;
  
  for (let i = 0; i < n; i++) {
      if (nums[i] === 0) {
          zeroCount++;
      } else {
          totalProduct *= nums[i];
      }
  }

  // Generate the result based on the number of zeroes.
  for (let i = 0; i < n; i++) {
      if (zeroCount > 1) {
          result[i] = 0; // More than one zero means all products will be zero.
      } else if (zeroCount === 1) {
          result[i] = nums[i] === 0 ? totalProduct : 0; // Only the index with zero gets the total product.
      } else {
          result[i] = totalProduct / nums[i]; // Regular division for all other cases.
      }
  }

  return result;
};

module.exports = { productExceptSelf, productExceptSelfUsingDivision };

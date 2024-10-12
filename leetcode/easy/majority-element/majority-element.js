/**
 * @param {number[]} nums
 * @return {number}
*/

// My first solution: O(n).
const majorityElement = function(nums) {
  // Error check the input.
  if (!nums || nums.length <= 0) return;

  // If there's only one element in the array, return it.
  if (nums.length === 1) return nums[0];

  // Loop through and create a hashmap: number => count
  const map = {};
  let majorityElement; 

  for (let i = 0; i < nums.length; i++) {
      const key = nums[i];
      if (!map[key]) map[key] = 1;
      else map[key] = map[key] + 1;
  }

  // Loop through the map to find the majority number.
  Object.entries(map).forEach(([key, count]) => {
      if (count > nums.length / 2) {
          majorityElement = key;
      }
  });

  return parseInt(majorityElement);
};

// Challenge: Can you solve the problem in linear--O(n)--time and in O(1) space?
const majorityElementEfficient = nums => {
  let candidate, count = 0;

    nums.forEach(num => {
        if (!count) candidate = num;
        count += num === candidate ? 1 : -1;
    });

    return candidate;
};

module.exports = { majorityElement, majorityElementEfficient };

/**
 * @param {number[]} nums
 * @return {boolean}
*/

const containsDuplicate = function(nums) {
  if (!nums || nums.length <= 1) return false;

  const map = {};

  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];

      if (!map[num]) map[num] = 1;
      else return true;
  }

  return false;
};

module.exports = containsDuplicate;

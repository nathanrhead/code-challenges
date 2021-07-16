'use strict';


function searchInsert(nums, target) {

  if(!nums || target !== 0 && !target) return 'There is either no array, no target, or both.';
  if (nums.length === 0) return 0;
  if (nums.length === 1 && nums[0] < target) return 1;
  else if (nums.length === 1 && !nums[0]) return 0;
  else if (nums.length === 1) return 0;

  let midpoint = Math.ceil(nums.length / 2);
  let start = 0;
  let end = nums.length - 1;

  while (nums[midpoint] !== target && start <= end && midpoint !== 0) {
    // console.log({target}, {start}, {end}, {midpoint});
    // Move either start or end, depending on whether the target is smaller than the midpoint or bigger.
    if (target > nums[midpoint]) start = midpoint + 1;
    else end = midpoint - 1;
    
    // Redefine the midpoint to be between start and end again.
    midpoint = Math.abs(Math.ceil((start + end) / 2));

  }
  // console.log({target}, {start}, {end}, {midpoint});

  if (midpoint === 0 && target < nums[midpoint]) return 0;
  else if (nums[midpoint] < target) return midpoint + 1;
  else if (nums[midpoint] > target) return midpoint;
  
  return midpoint;
}

module.exports = searchInsert;

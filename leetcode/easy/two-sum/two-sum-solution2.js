'use strict';

// Solution 2: Leetcodes one-pass hash solution, which is so much cooler than mine. Big 0 for time = O(n); space = O(n).

function twoSum(nums, target) {
  let map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    
    if (map.has(diff)) return Array(map.get(diff), i);
    else map.set(nums[i], i);
  }
  
  return ('No two-sum solution.');
}

module.exports = twoSum;

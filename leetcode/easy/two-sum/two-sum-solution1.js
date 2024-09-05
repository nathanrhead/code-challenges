'use strict';

// Solution 1 (mine); Big 0 for time = O(n); space = O(n).

const twoSum = function(nums, target) {
  let map = new Map();
  // Populate the map.
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], [map.get(nums[i]), i]);
    } else map.set(nums[i], i);
  };
  
  for (let i = 0; i < nums.length; i++) {
    // Search the map.
    let diff = target - nums[i];
    if (map.has(diff)) {
      if (Array.isArray(map.get(diff))) {
        if (Array.isArray(map.get(diff)[0])) return map.get(diff)[0];
        else return map.get(diff);
      }
    else if (map.get(diff) !== i) return [i, map.get(diff)];
    };
  };
  return ('No two-sum solution.')
};

module.exports = twoSum;

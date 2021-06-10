'use strict';

/*
Task: Given an array of integers and a target integer, return an array of two indices corresponding to the integers that, when summed, equal the target.
*/

// Solution 1 (mine); Big 0 for time = O(n); space = O(n).

// const twoSum = function(nums, target) {

//   let hashmap = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {

//       map.set(nums[i], [map.get(nums[i]), i]);
//     } else map.set(nums[i], i);
//   };

//   console.log('Hashmap:', map);

//   for (let i = 0; i < nums.length; i++) {
    
//     let diff = target - nums[i];

//     if (map.has(diff)) {
//       if (Array.isArray(map.get(diff))) {
//         if (Array.isArray(map.get(diff)[0])) return map.get(diff)[0];
//         else return map.get(diff);
//       }
//     else if (map.get(diff) !== i) return [i, map.get(diff)];
//     };
//   };
// };

// Solution 2: Leetcodes one-pass hash solution, which is so much cooler than mine. Big 0 for time = O(n); space = O(n).

function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      
      console.log({map});

      if (map.has(diff)) return new Array(map.get(diff), i);
      map.set(nums[i], i);
  }
  return ('No two-sum solution.');
}

module.exports = twoSum;

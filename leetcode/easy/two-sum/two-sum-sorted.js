'use strict';

// One option if the array is sorted ...  Google's answer per example interview: https://www.youtube.com/watch?v=XKu_SEDAykw, returning only true or false.
const sortedArray = [1, 2, 3, 4, 5, 6, 7];
const targetSortedOne = 9;
const targetSortedTwo = 23;
const targetSortedThree = 5;
const targetSortedFour = 14;


function twoSumSorted(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  if (target > nums[high] + nums[high-1]) return false;

  while (low < high) {
    let sum = nums[low] + nums[high];
    if (sum === target) return true;
    else if (sum < target) low++;
    else high--;
  };
  return false;
}

console.log('Sorted array answer one:', twoSumSorted(sortedArray, targetSortedOne)); // true
console.log('Sorted array answer two:', twoSumSorted(sortedArray, targetSortedTwo)); // false
console.log('Sorted array answer three:', twoSumSorted(sortedArray, targetSortedThree)); // true
console.log('Sorted array answer four:', twoSumSorted(sortedArray, targetSortedFour)); // false

# LeetCode Challenge #15: 3Sum | Rating: Medium

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

## Example 1

Input: nums = [-1,0,1,2,-1,-4]  
Output: [[-1,-1,2],[-1,0,1]]  
Explanation:

- nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
- nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
- nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
- The distinct triplets are [-1,0,1] and [-1,-1,2].
- Notice that the order of the output and the order of the triplets does not matter.

## Example 2

Input: nums = [0,1,1]  
Output: []  
Explanation: The only possible triplet does not sum up to 0.

## Example 3

Input: nums = [0,0,0]  
Output: [[0,0,0]]  
Explanation: The only possible triplet sums up to 0.

## Constraints

- 3 <= nums.length <= 3000
- -105 <= nums[i] <= 105

## Notes

- This algorithm was produced by claude.ai, though I was close in my attempt in the 45-minute window.
- The key to this solution is to remember that we're looking for two numbers in the array whose sum, when added to -nums[i], equals zero.
- The time complexity = O(n^2) thanks to the ascending sort and the two-pointer system; otherwise, each num[i] would have to be compared to each possible left-right pair, resulting in a time complexity of O(n^3); the time complexity beats 100% of JS submissions.
  - Sorting the array: O(n log n).
  - Nested loops: O(n^2).
  - Although we have nested loops, the two-pointers technique obviates the need to check every possible triplet, which would be O(n^3).
  - O(n log n + n^2) = O(n^2): the n^2 term dominates as n gets large, so we can simplify to O(n^2).
- The space complexity is O(1) or O(n): if we don't count the input and output space, it's O(1); if we count the input space but not the output, it's O(n).
  - Input space: O(n).
  - Output space: O(n).
  - Auxiliary space: O(1).
- This solution beats 100% of JS solutions for time and 15% for space.

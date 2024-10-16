# LeetCode Challenge #53: Maximum Subarray | Rating: Medium

## Task

Given an integer array nums, find the subarray with the largest sum and return its sum.

## Example 1

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]  
Output: 6  
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

## Example 2

Input: nums = [1]  
Output: 1  
Explanation: The subarray [1] has the largest sum 1.

## Example 3

Input: nums = [5,4,-1,7,8]  
Output: 23  
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

## Constraints

- 1 <= nums.length <= 105
- -104 <= nums[i] <= 104

## Notes

- Kadane’s Algorithm: iterate through the array while keeping track of two values:

1. currentSum: The maximum sum of the subarray ending at the current index.
2. maxSum: The maximum sum encountered so far.

- Time Complexity = O(n) because the algorithm goes through the array once.
- Space Complexity = O(1) because only a constant amount of space is used for maxSum and currentSum.

## Follow-up Task

If you have figured out the O(n) solution, try coding the the divide-and-conquer approach, which is subtler.

- I added the solution provided by ChatGPT, so that I can refer to it easily later, if desired.
- This solution's complexity is O(n log n), which is slower than O(n).

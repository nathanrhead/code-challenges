# LeetCode Challenge #217: Array Contains a Duplicate Value | Rating: Easy

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

## Example 1

Input: nums = [1,2,3,1]  
Output: true  
Explanation: The element 1 occurs at the indices 0 and 3.

## Example 2

Input: nums = [1,2,3,4]  
Output: false  
Explanation: All elements are distinct.

## Example 3

Input: nums = [1,1,1,3,3,4,3,2,4,2]  
Output: true

## Constraints

- 1 <= nums.length <= 105
- -109 <= nums[i] <= 109

## Notes

- Time complexity = O(n) because, while the solution may not have to loop through the entire array, it's possible.
- Space complexity = O(n) because the map may equal the array in size.

# Leetcode Challenge 35: Search Insert Position | Rating: Easy

## Task

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

## Example 1

Input: nums = [1,3,5,6], target = 5  
Output: 2

## Example 2

Input: nums = [1,3,5,6], target = 2  
Output: 1

## Example 3

Input: nums = [1,3,5,6], target = 7  
Output: 4

## Example 4

Input: nums = [1,3,5,6], target = 0  
Output: 0

## Example 5

Input: nums = [1], target = 0  
Output: 0

## Notes on Solutions

- It uses a binary search algorithm to keep the time and space complexity to O(log n).

- Big 0
  - Space: O(log n) where log n is the duration of the while loop; this solution is 81.78% faster than other JS submissions on Leetcode.
  - Time: O(log n) where n is the length of the array; this solution is only 26.83% smaller than other JS submissions on Leetcode.

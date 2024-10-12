# LeetCode Challenge #169: Majority Element | Rating: Easy

## Task

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

## Example 1

Input: nums = [3,2,3]  
Output: 3

## Example 2

Input: nums = [2,2,1,1,1,2,2]  
Output: 2

## Constraints

- n == nums.length
- 1 <= n <= 5 * 104
- -109 <= nums[i] <= 109

## Notes

- Solved in 20 minutes.
- Time complexity is O(n) + O(n) = O(2n) = O(n), because constants are ignored.
- Space complexity is O(n), because a map is created with n entries.

## Follow-up Task

Can you solve the problem in linear time and in O(1) space?

- This solution requires the "Boyer-Moore Voting" algorithm: if a majority element exists, it will always remain after repeatedly deleting two different elements from the array.
- Instead of deleting here, the code keeps track of the number that has the repeats the most, skipping those that don't.
- I got the algorithm and the code from claude.ai.
- This solution beats 97% of LeetCode solutions, where the O(n) solution beat less than 50%.

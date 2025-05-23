# LeetCode Challenge #198: House Robber | Rating: Medium

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

## Example 1

Input: nums = [1,2,3,1]  
Output: 4  
Explanation:  
Rob house 1 (money = 1) and then rob house 3 (money = 3).  
Total amount you can rob = 1 + 3 = 4.

## Example 2

Input: nums = [2,7,9,3,1]  
Output: 12  
Explanation:  
Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).  
Total amount you can rob = 2 + 9 + 1 = 12.

## Example 3

Input: nums = [2,1,1,2]
Output: 4
Explanation:  
Rob house 1 (money = 2) and 4 (money = 2).  
Total amount you can rob = 2 + 2 = 4.

## Constraints

- 1 <= nums.length <= 100
- 0 <= nums[i] <= 400

## Notes

A classic example of dynamic programming, because it requires breaking down the problem into sub-problems, solving those sub-problems, and reusing their results.

- Time complexity of the first implementation: O(n).
- Space complexity of the first implementation: O(n).

- Time complexity of the optimized version: O(n);
- Space complexity of the optimized version: O(1);

## Diagram

![Diagram of the algorithm](./house-robber-diagram.png)

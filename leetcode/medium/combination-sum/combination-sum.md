# LeetCode Challenge #39: Combination Sum | Rating: Medium

## Task

Given an array of distinct integers and a target integer, return a list of all unique combinations of integers where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequencyof at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

## Example 1

Input: candidates = [2,3,6,7], target = 7  
Output: [[2,2,3],[7]]  
Explanation:

- 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
- 7 is a candidate, and 7 = 7.

These are the only two combinations.

## Example 2

Input: candidates = [2,3,5], target = 8  
Output: [[2,2,2,2],[2,3,3],[3,5]]  

## Example 3

Input: candidates = [2], target = 1  
Output: []

## Constraints

- 1 <= candidates.length <= 30
- 2 <= candidates[i] <= 40
- All elements of candidates are distinct.

## Big O

- Time: O(N^(T/M)), where N is the number of candidates, T is the target sum, and M is the smallest number in the candidates array.
  - Tree Depth: Each recursive call reduces the target (remaining) and, in the worst case, the recursion depth can go up to T/M. This happens if we repeatedly add the smallest number in candidates until the sum reaches the target.
  - Branching Factor: At each level of the recursion tree, there can be up to N choices (all candidates), making the maximum branching factor N.
- Space: O(T/M), because the maximum depth of the recursive stack is T/M.

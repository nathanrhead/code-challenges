# LeetCode Challenge #104: Maximum Depth of a Binary Tree | Rating: Easy

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

## Example 1

![Diagram of a binary tree a height 3](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)

Input: root = [3,9,20,null,null,15,7]  
Output: 3

## Example 2

Input: root = [1,null,2]  
Output: 2

## Constraints

- The number of nodes in the tree is in the range [0, 104].
- -100 <= Node.val <= 100

## Notes

- Time complexity = O(n), because the solution visits each node of the tree once.
- Space complexity = O(h), where h is the height of the tree and defines the height of the call stack in this recursive solution.
- This solution beats 85% of solutions for time and 15% of the solutions for memory.

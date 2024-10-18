# LeetCode Challenge #102: Binary Tree Level Order Traversal | Rating: Medium

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

## Example 1

![Diagram of a binary tree with three levels.](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)

Input: root = [3,9,20,null,null,15,7]  
Output: [[3],[9,20],[15,7]]

## Example 2

Input: root = [1]  
Output: [[1]]

## Example 3

Input: root = []  
Output: []

## Constraints

- The number of nodes in the tree is in the range [0, 2000].
- -1000 <= Node.val <= 1000

## Notes

- Mostly sovled this one on my own, only I as missing the for-loop inside the while loop, which handles adding all the values from the level (sans null) to the level array.
- Time complexity = O(n^2) because, even though the nested loops only visit each node once, the shift() method requires the shifting of each value left, a quadratic operation. It'd be better to simulate a queue (see the second implementation).
- Space complexity = O(n) because the return value is an array that contains the value of each node of the tree; also, the queue holds at most half of the nodes (the last level) of a (balanced) binary tree, or n / 2, which simplifies to O(n).

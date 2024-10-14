# LeetCode Challenge #543: Diameter of a Binary Tree | Rating: Easy

## Task

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

## Example 1

![Diagram of a binary tree](https://assets.leetcode.com/uploads/2021/03/06/diamtree.jpg)

Input: root = [1,2,3,4,5]  
Output: 3  
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

## Example 2

Input: root = [1,2]  
Output: 1

## Constraints

- The number of nodes in the tree is in the range [1, 104].
- -100 <= Node.val <= 100

## Notes

- I had to turn to claude.ai for help with this one, though I got the depth-first-search traversal right.
- The key here is in treating the leaf nodes as the zero-level and calculating the depth of each successive node as the they pop off the stack recursively.
- Time complexity is O(n), because each node of the tree is visited once.
- Space complexity is O(h), because the stack created equals the height of the tree.

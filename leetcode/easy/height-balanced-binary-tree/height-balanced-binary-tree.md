# Leetcode Challenge 110: Balanced Binary Tree | Rating: Easy

## Task

Given a binary tree, determine if it is height-balanced.

## Example 1

![Drawing of a height-balanced binary tree](https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg)

Input: root = [3,9,20,null,null,15,7]  
Output: true

## Example 2

![Drawing of a height-imbalanced binary tree](https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg)

Input: root = [1,2,2,3,3,null,null,4,4]  
Output: false

## Example 3

Input: root = []  
Output: true

## Constraints

- The number of nodes in the tree is in the range [0, 5000].
- -104 <= Node.val <= 104

## Notes

- Because I didn't know (or couldn't remember) how height is calculated, I asked claude.ai for some explanations. It helped me with the algorithm, too.
- This algorithm has a time complexity of O(n), because each node is visited, and a space complexity of O(h), h being the number of rows the tree has (its height).
- This algorthim registered in the 24th percentile for time and space complexity.

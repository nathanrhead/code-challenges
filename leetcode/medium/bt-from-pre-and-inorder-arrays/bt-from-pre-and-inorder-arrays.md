# LeetCode Challenge # 105: Construct Binary Tree from Preorder and Inorder Traversal | Rating: Medium

## Task

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

## Example 1

![Diagram of the resultant binary tree](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]  
Output: [3,9,20,null,null,15,7]

## Example 2

Input: preorder = [-1], inorder = [-1]  
Output: [-1]

## Constraints

- 1 <= preorder.length <= 3000
- inorder.length == preorder.length
- -3000 <= preorder[i], inorder[i] <= 3000
- preorder and inorder consist of unique values.
- Each value of inorder also appears in preorder.
- preorder is guaranteed to be the preorder traversal of the tree.
- inorder is guaranteed to be the inorder traversal of the tree.

## Big O

- Time: O(n), because there are n recursive calls.
- Space: O(n):
  1. Recursive stack:
      - The recursion depth is equal to the height of the tree.
      - In the worst case (a completely unbalanced tree), the recursion depth is O(n). For a balanced tree, it’s O(log n).
  2. Slicing arrays: Slicing creates new arrays at each step, consuming O(n) additional space cumulatively for all recursive calls.

## Notes

The second algorithm avoids the use of .slice() which, while not affecting the overall time complexity, does remove overhead, which does increase the practical speed of the code, especially with larger or unbalanced inputs.

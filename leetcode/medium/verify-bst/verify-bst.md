# LeetCode Challenge #98: Validate a Binary Search Tree | Rating: Medium

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary search trees.

## Example 1

Input: root = [2,1,3]  
Output: true  

## Example 2

Input: root = [5,1,4,null,null,3,6]  
Output: false  
Explanation: The root node's value is 5 but its right child's value is 4.

## Constraints

- The number of nodes in the tree is in the range [1, 104].
- -231 <= Node.val <= 231 - 1

## Notes

When validating a binary-search tree, both depth-first search and breadth-first search can be used effectively, but they have different characteristics and trade-offs.

I. Depth-First Search (DFS)

1. Implementation using recursion (in-order traversal) or with an explicit stack, with the recursive approach tending to be simpler and more intuitive.
2. Time Complexity: O(n), where n is the number of nodes, as each node is visited once.
3. Space Complexity: O(h), where h is the height of the tree; in the worst case (for a skewed tree), this can be O(n), but for a balanced tree, it’s O(log n).
4. Advantages
    - Easy to implement with a clear and concise code structure.
    - Naturally provides sorted values, which can help in validating the BST properties if you keep track of the previous node.
5. Disadvantages: If the tree is very deep (skewed), it may hit the recursion limit in JavaScript, leading to stack overflow errors.

II. Breadth-First Search (BFS)

1. Implementation uses a queue to explore nodes level by level, checking the bounds for each node.
2. Time Complexity: O(n), similar to DFS, as all nodes must be checked.
3. Space Complexity: O(w), where w is the maximum width of the tree. This can be large for balanced trees, especially if the last level is filled.
4. Advantages
    - Can handle wide trees better than deep trees without hitting recursion limits.
    - Clearly defines the bounds for each node, which can be straightforward for validation.
5. Disadvantages: Generally requires more memory due to the queue structure, especially for trees with large widths.

III. Conclusion

- DFS is often the preferred method for validating a BST due to its simplicity, especially when implemented recursively. It provides a natural way to check the ordering of values while traversing.
- BFS may be better in scenarios where tree depth is a concern, but it tends to consume more memory.

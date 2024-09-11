/**
 * Definition of a binary tree node:
 * 
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// Use post-order traversal (left, right, root): this is ChatGPT's solution. I added all the stuff in the test to make it work. I also worked to understand the solution before using it. 
const invertTree = function(node) {
  if (!node) return null;

  // Recursively traverse the left subtree.
  invertTree(node.left);
  
  // Recursively traverse the right subtree.
  invertTree(node.right);

  // Swap the left and right child nodes of the current node.
  [node.left, node.right] = [node.right, node.left];

  return node;
};

module.exports = invertTree;

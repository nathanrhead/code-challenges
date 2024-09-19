/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const lowestCommonAncestor = function(root, p, q) {
  if (!root) return null;
  
  // Traverse the tree starting at the root.
  if (p < root.val && q < root.val) return lowestCommonAncestor(root.left, p, q); // Go left.
  else if (p > root.val && q > root.val) return lowestCommonAncestor(root.right, p, q); // Go right.
  else {
    return root.val;
  }
};

module.exports = lowestCommonAncestor;

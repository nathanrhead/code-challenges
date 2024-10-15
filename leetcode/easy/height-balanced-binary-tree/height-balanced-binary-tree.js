/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isBalanced = function(root) {    
  // An empty tree is considered balanced.
  if (root === null) return true;

  // Helper function to traverse the tree recursively, check the balance and return the result.
  function checkBalance(node) {
    if (!node) return 0;
    
    const leftHeight = checkBalance(node.left);

    if (leftHeight === -1) return -1;
    
    const rightHeight = checkBalance(node.right);

    if (rightHeight === -1) return -1;
    
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    
    return Math.max(leftHeight, rightHeight) + 1;
  }
  
  return checkBalance(root) !== -1;
};

module.exports = isBalanced;

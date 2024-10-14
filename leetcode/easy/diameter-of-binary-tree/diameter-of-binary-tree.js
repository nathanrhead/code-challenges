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
 * @return {number}
*/

const diameterOfBinaryTree = function(root) {  
  if (!root || (!root.left && !root.right)) return 0;
  
  let diameter = 0;

  // Traverse the tree depth-first to the last node.
  function _walk(node) {
      if (!node) return 0;

      const lDepth = _walk(node.left);
      const rDepth = _walk(node.right);
      
      // Update the diameter.
      diameter = Math.max(diameter, lDepth + rDepth);
              
      // Return the longest path from this node to a leaf
      return 1 + Math.max(lDepth, rDepth);
  }

  _walk(root);
 
 return diameter;
};

module.exports = diameterOfBinaryTree;

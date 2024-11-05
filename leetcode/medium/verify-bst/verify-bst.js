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

// Using BFS (from ChatGPT).
const isValidBstUsingBfs = function(root) {
  if (!root) return true;

  // Initialize a queue, storing the node and its valid min and max range.
  const queue = [[root, -Infinity, Infinity]];

  while (queue.length) {
    const [node, min, max] = queue.shift();

    // Check if the current node's value is within the valid range.
    if (node.value <= min || node.value >= max) return false;

    // If there is a left child, add it to the queue with updated bounds.
    if (node.left) queue.push([node.left, min, node.value]);

    // If there is a right child, add it to the queue with updated bounds.
    if (node.right) queue.push([node.right, node.value, max]);
  }

  return true; // All the nodes were valid.
};

// Using DFS.
const isValidBstUsingDfs = function(root) {
  if (!root) return true;

  let lastVal, bstBoolean = true;

  function _walk(node) {
    if (!node || !bstBoolean) return;
    if (node.left) _walk(node.left);
    if (lastVal >= node.value) bstBoolean = false;
    else lastVal = node.value;
    if (node.right) _walk(node.right);
  }

  _walk(root);
  
  return bstBoolean;
};

// This is ChatGPT's much more elegant approach.
function isValidBSTElegant(root, min = -Infinity, max = Infinity) {  
  // Base case: if we reach a null node, it's valid by definition.
  if (!root) return true;

  // The current node's value must be in the range defined by min and max.
  if (root.value <= min || root.value >= max) return false;

  // Recursively check the left and right subtrees: left has to keep getting smaller and right has to keep getting bigger.
  return isValidBSTElegant(root.left, min, root.value) && isValidBSTElegant(root.right, root.value, max);
}

module.exports = { isValidBstUsingBfs, isValidBstUsingDfs, isValidBSTElegant };

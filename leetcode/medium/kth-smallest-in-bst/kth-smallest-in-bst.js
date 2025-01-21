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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  let result = null,
    count = 0;

  const _inOrderTraversal = (node) => {
    if (!node || result !== null) return;

    _inOrderTraversal(node.left);
    count++;

    if (count === k) {
      result = node.val;
      return;
    }

    _inOrderTraversal(node.right);
  };

  _inOrderTraversal(root);
  return result;
};

module.exports = kthSmallest;

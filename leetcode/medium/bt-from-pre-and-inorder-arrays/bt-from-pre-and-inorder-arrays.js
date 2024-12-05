/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

class TreeNode {
  constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

// ChatGPT's first solution.
const buildTreeOne = (preorder, inorder) => {
  // Base case.
  if (!preorder.length || !inorder.length) return null;

  // The root is always the first element in preorder.
  const rootVal = preorder[0];
  const rootIndex = inorder.indexOf(rootVal);
  const root = new TreeNode(rootVal);

  // Divide the inorder array into left and right subtrees.
  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);

  // Divide the preorder array into left and right subtrees
  const leftPreorder = preorder.slice(1, leftInorder.length + 1);
  const rightPreorder = preorder.slice(leftInorder.length + 1);

  // Recursively build the left and right subtrees.
  root.left = buildTreeOne(leftPreorder, leftInorder);
  root.right = buildTreeOne(rightPreorder, rightInorder);

  return root;    
};

// ChatGPT's optimized solution: avoiding the use of .slice().
const buildTreeTwo = (preorder, inorder) => {
  const inorderIndexMap = new Map();
  inorder.forEach((val, index) => inorderIndexMap.set(val, index));

  function helper(preStart, inStart, inEnd) {
    if (preStart > preorder.length - 1 || inStart > inEnd) {
      return null;
    }

    const rootVal = preorder[preStart];
    const root = new TreeNode(rootVal);
    const inIndex = inorderIndexMap.get(rootVal);

    root.left = helper(preStart + 1, inStart, inIndex - 1);
    root.right = helper(preStart + (inIndex - inStart) + 1, inIndex + 1, inEnd);

    return root;
  }

  return helper(0, 0, inorder.length - 1);
}

module.exports = { buildTreeOne, buildTreeTwo };

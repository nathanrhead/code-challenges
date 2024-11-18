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

// This implementation by ChatGPT includes logging to help trace how the algorithm works.
const lowestCommonAncestor = function(root, p, q) {
  // Log entry into the function for the current node.
  console.log(`Entering Node: ${root ? root.value : 'null'}`);

  // Base cases
  if (!root) {
    console.log(`Base case: Node is null. Returning null.`);
    return null;
  }

  if (root === p) {
    console.log(`Base case: Found p at Node ${root.value}. Returning Node ${root.value}`);
    return root;
  }

  if (root === q) {
    console.log(`Base case: Found q at Node ${root.value}. Returning Node ${root.value}`);
    return root;
  }

  // Recursive calls for left and right children.
  console.log(`Traversing left subtree of Node ${root.value}`);
  const left = lowestCommonAncestor(root.left, p, q);

  console.log(`Back at Node ${root.value} from left subtree. Left result: ${left ? left.value : 'null'}`);

  console.log(`Traversing right subtree of Node ${root.value}`);
  const right = lowestCommonAncestor(root.right, p, q);

  console.log(`Back at Node ${root.value} from right subtree. Right result: ${right ? right.value : 'null'}`);

  // Determine and log the result at the current node.
  if (left && right) {
    console.log(`Node ${root.value} is the LCA of p (${p.value}) and q (${q.value}).`);
    return root;
  }

  const result = left || right;
  console.log(`Node ${root.value}: Returning ${result ? result.value : 'null'}`);
  return result;
};

module.exports = lowestCommonAncestor;

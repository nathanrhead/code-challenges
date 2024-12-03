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
 * @return {number[]}
 */
const rightSideView = function(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let rightmostValue;

    
    for (let i = 0; i < levelSize; i++) {
      console.log({i, levelSize, queue});
      
      const node = queue.shift();

      console.log({node});

      rightmostValue = node.val;

      console.log({rightmostValue});
      
      if (node.left) {
        console.log('push left node');
        queue.push(node.left);
      }
      if (node.right) {
        console.log('push right node');
        queue.push(node.right);
      }
    }
    
    result.push(rightmostValue);

    console.log({result});
  }

  return result;
};

module.exports = rightSideView;

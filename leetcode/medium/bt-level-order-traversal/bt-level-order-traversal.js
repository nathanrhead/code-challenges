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
 * @return {number[][]}
*/

const levelOrder = function(root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length) {
      const levelSize = queue.length;
      const thisLevel = [];

      for (let i = 0; i < levelSize; i++) {
          const current = queue.shift();

          thisLevel.push(current.value);

          if (current.left) queue.push(current.left);
          if (current.right) queue.push(current.right);
      }

      result.push(thisLevel);
  }

  return result;
};

// Shift is expensive (O(n^2)). Here's an implementation that simulates dequeueing.
const levelOrderSansShift = root => {
  if (!root) return [];

  const queue = [];  // Use array as queue
  let head = 0;      // Manual pointer for the head of the queue (dequeue)
  
  queue.push(root);  // Add to the end of the queue
  const result = [];

  while (head < queue.length) {  // Continue until head pointer catches up to the tail
      const levelSize = queue.length - head;
      const thisLevel = [];

      for (let i = 0; i < levelSize; i++) {
          const current = queue[head]; // Access element at the head without shifting
          head++;  // Move the head pointer (simulate dequeue)
          
          thisLevel.push(current.value);

          if (current.left) queue.push(current.left);   // Enqueue left child
          if (current.right) queue.push(current.right); // Enqueue right child
      }

      result.push(thisLevel);
  }

  return result;
};

module.exports = { levelOrder, levelOrderSansShift };

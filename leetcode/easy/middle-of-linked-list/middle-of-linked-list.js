/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
*/

// This is my solution.
const middleNode = function(list) {
  const stack = [];
  let current = list.head, midPoint;

  // Traverse the list and count the nodes.
  while (current) {
    stack.push(current);
    current = current.next;
  }

  midPoint = stack.length % 2 ? stack[Math.floor(stack.length / 2)] : stack[(stack.length / 2)];

  return midPoint;
};

// This solution was posted by DevOgabek on LeetCode.
const middleNodeUsingPointers = function(list) {
  let slowPointer = list.head, fastPointer = list.head;

  // Traverse the list until the fast pointer reaches the end. The slow pointer will be behind the fast pointer a factor of two, because it only takes one step, while the fast pointer takes two.
  while (fastPointer && fastPointer.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
  }

  return slowPointer;
};
module.exports = { middleNode, middleNodeUsingPointers };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycle = function(list) {  
  let slowPointer = list.head;
  let fastPointer = list.head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer?.next;
    fastPointer = fastPointer?.next?.next;

    if (slowPointer === fastPointer) return true;
  }

  return false;
};

module.exports = hasCycle;

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


// Note: A linked list can be reversed either iteratively or recursively. Can you implement both?

// Iterative implementation.
const reverseList = function(head) {
  // If the list consists of only the head, then it can't be reversed and should be returned as is.
  if (!head?.next) return head;

  // Instantiate variables to hold the first and second nodes.
  let first = head, second = head.next;

  // Iterate through the list while the second node has value.
  while (second) {
      const temp = second.next; // Store the third node (and its links).
      second.next = first; // Reverse the second node's pointer.
      first = second; // Iterate to the next node.
      second = temp; // Reattach the list. 
  }

  head.next = null; // Reverse the head's (now tail's) pointer by pointing it to null.
  head = first; // Reassign the head to the former tail's node.

  return head;
};

// Recursive implementation.
const reverseListRecursively = (node) => {

  console.log(`Entering with node: ${node?.val}`);

  if (!node || !node.next) {
    console.log(`Base case reached, returning node: ${node?.val}`);
    return node;
  }
  
  console.log(`Making recursive call for node.next: ${node.next.val}`);
  
  // Recursively iterate to the end of the list.
  const reversedListHead = reverseListRecursively(node.next);

  console.log(`Returned from recursive call. reversedListHead: ${reversedListHead.val}`);

  console.log(`Reversing pointers: ${node.next.val} -> ${node.val}`);
  
  node.next.next = node; // Reverse the pointer, e.g., 4 -> 5 -> null => 5 -> 4.
  node.next = null; // Break the node's next pointer, e.g., 4 -> 3 -> 2 -> 1 => 4 -> null. This avoids the possibility of cycles in the reversed list.

  console.log(`Returning reversedListHead: ${reversedListHead.val}`);
  
  return reversedListHead; // It's always the last node of the list.
}

module.exports = { reverseList, reverseListRecursively };

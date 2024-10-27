/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */

function _Node(val) {
  this.val = val;
  this.next = null;
  this.random = null;
}

const copyRandomList = function(head) {
  if (!head) return null;

  // Step 1: Copy each node and insert it right after the original node: A -> A' -> B -> B' -> C -> C' -> null.
  let current = head, copyHead, copyCurrent;
  while (current) {
    const newNode = new _Node(current.val);

    newNode.next = current.next;
    current.next = newNode;
    current = newNode.next;
  }

  // Step 2: Assign random pointers for the copied nodes.
  current = head;
  while (current) {
    if (current.random) {
        current.next.random = current.random.next; // The .next of the random is the copied version of the random node.
    }

    current = current.next.next;
  }

  // Step 3: Separate the copied nodes to form the copied list and restore the original list.
  current = head; // Used to restore the original list.
  copyHead = head.next; // The copy of the head node.
  copyCurrent = copyHead; // Used to separate the copied list from the original.

  while (current) {
    current.next = current.next.next; // Cut out the copied nodes from the original list to restore it.

    if (copyCurrent.next) copyCurrent.next = copyCurrent.next.next; // Cout out the original nodes from the copied list.

    current = current.next;
    copyCurrent = copyCurrent.next;
  }

  return copyHead;
};

module.exports = copyRandomList;

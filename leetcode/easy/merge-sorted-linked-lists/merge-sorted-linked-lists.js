'use strict';
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function mergeTwoSortedLists(list1, list2) {
  // Create a dummy node to start the merged list.
  const dummy = new ListNode(-1);
  let current = dummy;
    
  // Traverse both lists and add the smaller value to the merged list.
  while (list1 !== null && list2 !== null) {
      if (list1.val <= list2.val) {
          current.next = list1;
          list1 = list1.next;
      } else {
          current.next = list2;
          list2 = list2.next;
      }
      current = current.next;
  }
  
  // If one list is longer, append the rest of it
  if (list1 !== null) {
      current.next = list1;
  }
  if (list2 !== null) {
      current.next = list2;
  }
  
  // Return the head of the merged list (skip the dummy node)
  return linkedListToArray(dummy.next);
};

// Helper function to convert a linked list to an array (for testing)
function linkedListToArray(head) {
  let result = [];
  while (head !== null) {
      result.push(head.val);
      head = head.next;
  }
  return result;
}

module.exports = mergeTwoSortedLists;

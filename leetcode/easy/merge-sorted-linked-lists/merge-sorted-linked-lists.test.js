'use strict';

const mergeTwoSortedLists = require('./merge-sorted-linked-lists');

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
      current.next = new ListNode(val);
      current = current.next;
  }
  return dummy.next;
}

describe('leetcode challenge to merge two sorted linked lists', () => {
  it ('returns a linked list that is a sorted product of the merging of two sorted linked lists', () => {
    const list1 = [1,2,4];
    const list2 = [1,3,4];
    expect(mergeTwoSortedLists(createLinkedList(list1), createLinkedList(list2))).toEqual([1,1,2,3,4,4]);
  });
});
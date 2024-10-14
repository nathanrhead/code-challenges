'use strict';

const { middleNode, middleNodeUsingPointers } = require('./middle-of-linked-list');

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    return this;
  }
}

function createListFromArray(array) {
  const list = new LinkedList();

  for (let i = 0; i < array.length; i++) {
    list.append(array[i]);
  }

  return list;
}

function createArrayFromList(head) {
  const array = [];
  let current = head;

  while (current) {
    array.push(current.val);
    current = current.next;
  }

  return array;
}

describe ('leetcode challenge to return the middle node of a linked list', () => {
  it ('returns the middle node of the linked list', () => {
    expect(createArrayFromList(middleNode(createListFromArray([1,2,3,4,5])))).toEqual([3,4,5]);
    expect(createArrayFromList(middleNode(createListFromArray([1,2,3,4,5,6])))).toEqual([4,5,6]);

    expect(createArrayFromList(middleNodeUsingPointers(createListFromArray([1,2,3,4,5])))).toEqual([3,4,5]);
    expect(createArrayFromList(middleNodeUsingPointers(createListFromArray([1,2,3,4,5,6])))).toEqual([4,5,6]);
  });
});

'use strict';

const { reverseList, reverseListRecursively } = require('./reverse-linked-list');

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }

    return this;
  }
}

function createListFromArray(array) {
  const list = new LinkedList();

  for (let i = 0; i < array.length; i++) {
    list.append(array[i]);
  }
  
  return list.head;
}

function createArrayFromList(head) {
  const array = [];
  let current = head;
  
  while (current) {
    const temp = current.next;

    array.push(current.val);
    current = temp;
  }

  return array;
}

describe ('leetcode challenge to reverse a linked list', () => {
  it ('reverses a linked list iteratively', () => {
    expect(createArrayFromList(reverseList(createListFromArray([1,2,3,4,5])))).toEqual([5,4,3,2,1]);
    expect(createArrayFromList(reverseList(createListFromArray([1,2])))).toEqual([2,1]);
    expect(createArrayFromList(reverseList(createListFromArray([])))).toEqual([]);
    expect(createArrayFromList(reverseList(createListFromArray([1])))).toEqual([1]);
  });

  it ('reverses a linked list recursively', () => {
    expect(createArrayFromList(reverseListRecursively(createListFromArray([1,2,3,4,5])))).toEqual([5,4,3,2,1]);
    expect(createArrayFromList(reverseListRecursively(createListFromArray([1,2])))).toEqual([2,1]);
    expect(createArrayFromList(reverseListRecursively(createListFromArray([])))).toEqual([]);
    expect(createArrayFromList(reverseListRecursively(createListFromArray([1])))).toEqual([1]);
  });
});

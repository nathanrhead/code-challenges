'use strict';

const solution = require('./add-two-numbers');

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
    array.push(current.val);
    current = current.next;
  }

  return array;
}

describe ('leetcode challenge to add two numbers, each digit of which is held in linked lists in reverse order', () => {
  it ('returns the head of the linked list that was created to hold the sum of the two numbers, also in reverse order', () => {
    expect(createArrayFromList(solution(createListFromArray([2,4,3]), createListFromArray([5,6,4])))).toEqual([7,0,8]);
    expect(createArrayFromList(solution(createListFromArray([0]), createListFromArray([0])))).toEqual([0]);
    expect(createArrayFromList(solution(createListFromArray([9,9,9,9,9,9,9]), createListFromArray([9,9,9,9])))).toEqual([8,9,9,9,0,0,0,1]);
  });
});
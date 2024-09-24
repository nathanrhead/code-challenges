'use strict';

const solution = require('./linked-list-cycle');

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

  // Look for the presence of a given value in the list: time = O(n).
  getNode(value) {
    let current = this.head;

    while (current) {
      if (current.val === value) {
        return current;
      }

      current = current.next;
    }

    return false;
  }
}

function createListFromArray(array, cycleIndex) {
  const list = new LinkedList();
  let cycledNode;

  for (let i = 0; i < array.length; i++) {
    list.append(array[i]);

    if (i === cycleIndex) cycledNode = list.getNode(array[i]);
    if (i === array.length - 1) list.tail.next = cycledNode;
  }

  return list;
}

describe ('leetcode challenge to determine whether a link list contains a cycle', () => {
  it ('returns true when a linked list contains a cylce', () => {
    expect(solution(createListFromArray([3,2,0,-4], 1))).toBeTruthy();
    expect(solution(createListFromArray([1,2], 0))).toBeTruthy();
  });

  it ('returns false when a linked list does not contain a cycle', () => {
    expect(solution(createListFromArray([1], -1))).toBeFalsy();
  });
});

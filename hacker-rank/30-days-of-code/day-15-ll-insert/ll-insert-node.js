'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

    insert(value) {
      //complete this method
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      console.log(this.head);
      return this.head;
    }
  }

const test1 = new LinkedList();
test1.insert(1);
test1.insert(2);
test1.insert(3);
test1.insert(4);
test1.insert(5);

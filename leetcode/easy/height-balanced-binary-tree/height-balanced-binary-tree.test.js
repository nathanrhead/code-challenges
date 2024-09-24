'use strict';

const solution = require('./height-balanced-binary-tree');

// Define the tree node.
class Node {
  constructor(val, left, right) {
    this.value = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }


  addNode(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let current;
    let queue = [];
    queue[0] = this.root;

    while (queue) {
      current = queue.shift();
      
      if (!current.left) {
        current.left = new Node(value);
        return;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = new Node(value);
        return;
      } else {
        queue.push(current.right);
      }
    }
  }
}

const createTree = array => {
  const node = new Node(array[0]);
  this.root = node;
  
  for (let i = 1; i < array.length; i++) {
    node.addNode(array[i]);
  }

  return node;
};

describe ('leetcode challenge to determine whether a binary tree is height-balanced', () => {
  it ('returns true when the depth of the two subtrees of every node never differs by more than one', () => {
    expect(solution(createTree([3,9,20,null,null,15,7]))).toBeTruthy();
    expect(solution(createTree([]))).toBeTruthy();
  });

  it ('returns false when the depth of the two subtrees differs by more than one', () => {
    expect(solution(createTree([1,2,2,3,3,null,null,4,4]))).toBeFalsy();
  });
});
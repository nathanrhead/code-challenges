'use strict';

const solution = require('./lowest-common-ancestor');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  addNodesFromArray(values) {
    if (!values || !values.length) return null;

    this.root = new Node(values[0]);

    const queue = [this.root];
    let index = 1;

    while (index < values.length) {
      const current = queue.shift();

      // Add left child
      if (values[index] !== null) {
        const leftNode = new Node(values[index]);
        current.left = leftNode;
        queue.push(leftNode);
      }
      index++;

      // Add right child
      if (index < values.length && values[index] !== null) {
        const rightNode = new Node(values[index]);
        current.right = rightNode;
        queue.push(rightNode);
      }
      index++;
    }

    return this.root;
  }

  // Helper to find a node by value
  findNode(root, value) {
    if (!root) return null;
    if (root.value === value) return root;

    return this.findNode(root.left, value) || this.findNode(root.right, value);
  }
}

describe ('LeetCode challenge to find the lowest common ancestor of two nodes', () => {
  const treeOne = new BinaryTree();
  const treeTwo = new BinaryTree();
  treeOne.addNodesFromArray([3,5,1,6,2,0,8,null,null,7,4]);
  treeTwo.addNodesFromArray([1,2]);

  it ('returns the lowest common ancestor', () => {
    expect(solution(treeOne.root, treeOne.findNode(treeOne.root, 5), treeOne.findNode(treeOne.root, 1))).toEqual(treeOne.findNode(treeOne.root, 3));
    expect(solution(treeOne.root, treeOne.findNode(treeOne.root, 5), treeOne.findNode(treeOne.root, 4))).toEqual(treeOne.findNode(treeOne.root, 5));
    expect(solution(treeTwo.root, treeTwo.findNode(treeTwo.root, 1), treeTwo.findNode(treeTwo.root, 2))).toEqual(treeTwo.findNode(treeTwo.root, 1));
  });
});

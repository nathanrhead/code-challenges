'use strict';

const { isValidBstUsingBfs, isValidBstUsingDfs, isValidBSTElegant } = require('./verify-bst');

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
}

describe ('LeetCode challenge to validate the structure of a binary-search tree', () => {
  const tree = new BinaryTree();

  it ('returns true if the structure of the BST is correct', () => {
    expect(isValidBstUsingBfs(tree.addNodesFromArray([2,1,3]))).toBeTruthy();
    expect(isValidBstUsingBfs(tree.addNodesFromArray([0]))).toBeTruthy();

    expect(isValidBstUsingDfs(tree.addNodesFromArray([2,1,3]))).toBeTruthy();
    expect(isValidBstUsingDfs(tree.addNodesFromArray([0]))).toBeTruthy();

    expect(isValidBSTElegant(tree.addNodesFromArray([2,1,3]))).toBeTruthy();
    expect(isValidBSTElegant(tree.addNodesFromArray([0]))).toBeTruthy();

  });

  it ('returns false if the structure of the BST is incorrect', () => {
    expect(isValidBstUsingBfs(tree.addNodesFromArray([2,2,2]))).toBeFalsy();
    expect(isValidBstUsingBfs(tree.addNodesFromArray([5,4,6,null,null,3,7]))).toBeFalsy();

    expect(isValidBstUsingDfs(tree.addNodesFromArray([2,2,2]))).toBeFalsy();
    expect(isValidBstUsingDfs(tree.addNodesFromArray([5,4,6,null,null,3,7]))).toBeFalsy();

    expect(isValidBSTElegant(tree.addNodesFromArray([2,2,2]))).toBeFalsy();
    expect(isValidBSTElegant(tree.addNodesFromArray([5,4,6,null,null,3,7]))).toBeFalsy();
  });
});


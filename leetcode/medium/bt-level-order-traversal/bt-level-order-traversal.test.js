'use strict';

const { levelOrder, levelOrderSansShift } = require('./bt-level-order-traversal');

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

function traverse(node) {
  const tree = { value: node.value };

  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);

  return tree;
}

describe ('leetcode challenge to return a binary tree\'s nodes by level from top to bottom and left to right', () => {
  it ('returns an array of arrays representing each level and its values of a binary tree', () => {
    const tree = new BinaryTree();

    expect(levelOrder(tree.addNodesFromArray([3,9,20,null,null,15,7]))).toEqual([[3],[9,20],[15,7]]);
    expect(levelOrder(tree.addNodesFromArray([1]))).toEqual([[1]]);
    expect(levelOrder(tree.addNodesFromArray([]))).toEqual([]);

    expect(levelOrderSansShift(tree.addNodesFromArray([3,9,20,null,null,15,7]))).toEqual([[3],[9,20],[15,7]]);
    expect(levelOrderSansShift(tree.addNodesFromArray([1]))).toEqual([[1]]);
    expect(levelOrderSansShift(tree.addNodesFromArray([]))).toEqual([]);

  });
});

'use strict';

// Creates the nodes for the trees.
class Node {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Creates the binary tree.
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // This creates a Binary Tree, adding nodes from top to bottom and left to right.
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

    // Define a method named add that accepts a value and adds a new node with that value in the correct location in the binary search tree: this one will make a BST and may only accept integers.
  add(value) {
    if (typeof value !== 'number') {
      return null;
    }
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    const _insert = (node) => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = new Node(value);
          return;
        } else if (node.left !== null) {
          return _insert(node.left);
        }
      } else if (value >= node.value) {
        if (node.right === null) {
          node.right = new Node(value);
          return;
        } else if (node.right !== null) {
          return _insert(node.right);
        }
      }
    };
    _insert(this.root);
  }


  // Define methods for each of the depth-first traversals, called (1) preOrder, (2) inOrder, and (3) postOrder, which return an array of the values, ordered appropriately.

  preOrder() { 
    // Create an array that will hold the values
    const results = [];
    let _walk = (node) => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  inOrder() {
    const results = [];
    let _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  postOrder() {
    const results = [];

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  // BF Search: This search method will return the nodes' values from top to bottom and left to right, one level at a time.
  breadthFirst() {
    let queue = [];
    const results = [];
    let queueIndex = 0;
    let resultsIndex = 0;

    if (!this.root) return;
    // Put the root node at the front of the queue array. This also starts the while loop.
    queue[queueIndex] = this.root;
    let current;

    // When the tree runs out, the resultsIndex will iterate one more time and the queue[resultsIndex] will have no value.
    while (queue[resultsIndex]) {
      current = queue[resultsIndex];
      results[resultsIndex] = current.value;

      if (current.left) { queue[++queueIndex] = current.left; }
      if (current.right) { queue[++queueIndex] = current.right; }

      delete queue[resultsIndex];
      resultsIndex++;
    }
    queue = [];
    return results;
  }

  // Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
  contains(value) {
    if (!this.root) return null;
    let boolean = false;
    const _walk = (node) => {
      if (node.value === value) { boolean = true; }
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return boolean;
  }
}

module.exports = BinaryTree;

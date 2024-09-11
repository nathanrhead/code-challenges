'use strict';

const solution = require('./invert-binary-tree');

describe ('leetcode challenge to invert a binary tree', () => {
  it ('returns true when the number of opening brackets equals the number of closing brackets', () => {
    // Define the tree node.
    class Node {
      constructor(val, left, right) {
        this.value = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
      }

      addNode(value) {    
        if (typeof value !== 'number') return null;
        
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
        _insert(this);
      }
    };

    const test1 = [4,2,7,1,3,6,9];
    const test2 = [2,1,3];
    const test3 = [];

    const createTree = array => {
      const node = new Node(array[0]);
      this.root = node;
      
      for (let i = 1; i < array.length; i++) {
        node.addNode(array[i]);
      }

      return node;
    };

    // Iterate using breadth-first traversal (top to bottom, left to right).
    const createValuesArrayFromBst = (root) => {
      if (!root.value) return [];

      let queue = [], results = [], queueIndex = 0, resultsIndex = 0, current;

      queue[queueIndex] = root;

      while (queue[resultsIndex]) {
        current = queue[resultsIndex];
        results[resultsIndex] = current.value;

        if (current.left) { queue[++queueIndex] = current.left; }
        if (current.right) { queue[++queueIndex] = current.right; }

        delete queue[resultsIndex];
        resultsIndex++;
      }

      // queue = [];

      return results;
    }

    expect(createValuesArrayFromBst(solution(createTree(test1)))).toEqual([4,7,2,9,6,3,1]);
    expect(createValuesArrayFromBst(solution(createTree(test2)))).toEqual([2,3,1]);
    expect(createValuesArrayFromBst(solution(createTree(test3)))).toEqual([]);
  });
});

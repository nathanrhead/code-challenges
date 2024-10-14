'use strict';

const solution = require('./diameter-of-binary-tree');

describe ('leetcode challenge to calculate the diameter (longest distance between two nodes) of a binary tree', () => {
  it ('returns the diameter of a binary tree', () => {
    // Define the tree node.
    class Node {
      constructor(val, left, right) {
        this.value = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
      }

      addNode(value) {
        let current;
        let queue = [];

        queue[0] = this;
    
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
    };

    const createTree = array => {
      const node = new Node(array[0]);
      
      for (let i = 1; i < array.length; i++) {
        node.addNode(array[i]);
      }

      return node;
    };

    expect(solution(createTree([1,2,3,4,5]))).toEqual(3);
    expect(solution(createTree([1,2]))).toEqual(1);
    expect(solution(createTree([]))).toEqual(0);
  });
});

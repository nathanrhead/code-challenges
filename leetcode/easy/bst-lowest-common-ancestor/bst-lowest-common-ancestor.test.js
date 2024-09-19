'use strict';

const solution = require('./bst-lowest-common-ancestor');

class Node {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }

  addNode(value) {    
    if (typeof value !== 'number') return null;
    
    const _insert = (node) => {
      if (value < node.val) {
        if (node.left === null) {
          node.left = new Node(value);
          return;
        } else if (node.left !== null) {
          return _insert(node.left);
        }
      } else if (value >= node.val) {
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


function createTree(array) {
  const node = new Node(array[0]);

  for (let i = 1; i < array.length; i++) {
    node.addNode(array[i]);
  }

  return node;
}

describe ('leetcode challenge to determine the lowest common ancestor of two nodes in a binary search tree', () => {
  it ('returns the lowest common ancestor of two nodes', () => {
    expect(solution(createTree([6,2,8,0,4,7,9,null,null,3,5]), 2, 8)).toEqual(6);
    expect(solution(createTree([6,2,8,0,4,7,9,null,null,3,5]), 2, 4)).toEqual(2);
    expect(solution(createTree([2,1]), 2, 4)).toEqual(2);
  });
});

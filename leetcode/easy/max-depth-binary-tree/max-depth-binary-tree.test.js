'use strict';

const solution = require('./max-depth-binary-tree');

class Node {
  constructor(val, left = null, right = null) {
    this.value = val;
    this.left = left;
    this.right = right;
  }
}

const createTree = array => {
  if (!array.length) return null;
  
  // Create the root node
  const root = new Node(array[0]);
  const queue = [root];
  let i = 1;
  
  while (i < array.length) {
    const current = queue.shift();

    // Handle the left child
    if (array[i] !== null) {
      current.left = new Node(array[i]);
      queue.push(current.left);
    }
    i++;
    
    // Handle the right child
    if (array[i] !== null) {
      current.right = new Node(array[i]);
      queue.push(current.right);
    }
    i++;
  }
  
  return root;
};

describe ('leetcode challenge to determine the maximum depth of a binary tree', () => {
  it ('returns the maximum depth of a binary tree', () => {
    expect(solution(createTree([3,9,20,null,null,15,7]))).toEqual(3);
    expect(solution(createTree([1,null,2]))).toEqual(2);
  });
});
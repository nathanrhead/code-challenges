'use strict';

const { buildTreeOne, buildTreeTwo } = require('./bt-from-pre-and-inorder-arrays');

const arrayFromTree = (root, lastNodeVal) => {
  const result = [];
  const queue = [root];

  while (queue.length) {
    const current = queue.shift();

    if (current) {
      result.push(current.val);

      if (current.val === lastNodeVal) break;
      queue.push(current.left);
      queue.push(current.right);
    } else {
      result.push(null);
    }
  }

  return result;
;}

describe('buildTreeOne', () => {
  it ('returns the correct tree for the given preorder and inorder arrays', () => {
    const preorder = [3,9,20,15,7];
    const inorder = [9,3,15,20,7];
    const lastNodeVal = preorder[preorder.length - 1];

    expect(arrayFromTree(buildTreeOne(preorder, inorder), lastNodeVal)).toEqual([3,9,20,null,null,15,7]);
  });

  it ('returns the correct tree for the given preorder and inorder arrays', () => {
    const preorder = [-1];
    const inorder = [-1];
    const lastNodeVal = preorder[preorder.length - 1];

    expect(arrayFromTree(buildTreeOne(preorder, inorder), lastNodeVal)).toEqual([-1]);
  });
});

describe('buildTreeTwo', () => {
  it ('returns the correct tree for the given preorder and inorder arrays', () => {
    const preorder = [3,9,20,15,7];
    const inorder = [9,3,15,20,7];
    const lastNodeVal = preorder[preorder.length - 1];

    expect(arrayFromTree(buildTreeTwo(preorder, inorder), lastNodeVal)).toEqual([3,9,20,null,null,15,7]);
  });

  it ('returns the correct tree for the given preorder and inorder arrays', () => {
    const preorder = [-1];
    const inorder = [-1];
    const lastNodeVal = preorder[preorder.length - 1];

    expect(arrayFromTree(buildTreeTwo(preorder, inorder), lastNodeVal)).toEqual([-1]);
  });
});
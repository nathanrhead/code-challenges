'use strict';

const BinaryTree = require('./binary-tree-class');
const { findSubTree1, findSubTree2 } = require('./subtree-in-tree');

describe('the function to determine whether a subtree exists within a binary tree', () => {
  const root1 = new BinaryTree();
  root1.addNode(3);
  root1.addNode(4);
  root1.addNode(5);
  root1.addNode(1);
  root1.addNode(2);
  const subroot1 = new BinaryTree();
  subroot1.addNode(4);
  subroot1.addNode(1);
  subroot1.addNode(2);
  
  const root2 = new BinaryTree();
  root2.addNode(3);
  root2.addNode(4);
  root2.addNode(5);
  root2.addNode(1);
  root2.addNode(2);
  root2.addNode(null);
  root2.addNode(null);
  root2.addNode(null);
  root2.addNode(null);
  root2.addNode(0);

  const subroot2 = new BinaryTree();
  subroot2.addNode(4);
  subroot2.addNode(1);
  subroot2.addNode(2);

  it ('returns true when a subtree exists within a tree', () => {
    expect(findSubTree1(root1, subroot1)).toBe(true);
    expect(findSubTree2(root1, subroot1)).toBe(true);

  });

  it ('returns false when a subtree does not exist within a tree', () => {
    expect(findSubTree1(root2, subroot2)).toBe(false);
    expect(findSubTree2(root2, subroot2)).toBe(false);

  });

  it ('returns false when either the tree or the subtree is empty', () => {
    const root3 = new BinaryTree();
    const subroot3 = new BinaryTree();
    expect(findSubTree1()).toBe(false);
    expect(findSubTree1(root2, subroot3)).toBe(false);
    expect(findSubTree1(root3, subroot2)).toBe(false);

    expect(findSubTree2()).toBe(false);
    expect(findSubTree2(root2, subroot3)).toBe(false);
    expect(findSubTree2(root3, subroot2)).toBe(false);

  });
});

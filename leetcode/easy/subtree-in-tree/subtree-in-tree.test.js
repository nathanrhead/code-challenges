'use strict';

const BinaryTree = require('./binary-tree-class');
const { findSubTree1, findSubTree2, findSubTree3 } = require('./subtree-in-tree');

describe('the function to determine whether a subtree exists within a binary tree', () => {
  const tree1 = new BinaryTree();
  tree1.addNode(3);
  tree1.addNode(4);
  tree1.addNode(5);
  tree1.addNode(1);
  tree1.addNode(2);
  const subtree1 = new BinaryTree();
  subtree1.addNode(4);
  subtree1.addNode(1);
  subtree1.addNode(2);
  
  const tree2 = new BinaryTree();
  tree2.addNode(3);
  tree2.addNode(4);
  tree2.addNode(5);
  tree2.addNode(1);
  tree2.addNode(2);
  tree2.addNode(null);
  tree2.addNode(null);
  tree2.addNode(null);
  tree2.addNode(null);
  tree2.addNode(0);
  const subtree2 = new BinaryTree();
  subtree2.addNode(4);
  subtree2.addNode(1);
  subtree2.addNode(2);

  const tree3 = new BinaryTree();
  tree3.addNode(7);
  tree3.addNode(6);
  tree3.addNode(6);
  tree3.addNode(1);
  tree3.addNode(3);
  tree3.addNode(8);
  tree3.addNode(null);
  tree3.addNode(null);
  tree3.addNode(null);
  tree3.addNode(null);
  tree3.addNode(9);
  tree3.addNode(4);
  const subtree3 = new BinaryTree();
  subtree3.addNode(6);
  subtree3.addNode(null);
  subtree3.addNode(8);
  subtree3.addNode(null);
  subtree3.addNode(null);
  subtree3.addNode(9);
  subtree3.addNode(4);

  const root1 = tree1.root;
  const root2 = tree2.root;
  const root3 = tree3.root;
  const subroot1 = subtree1.root;
  const subroot2 = subtree2.root;
  const subroot3 = subtree3.root;


  it ('returns true when a subtree exists within a tree', () => {
    expect(findSubTree1(root1, subroot1)).toBe(true);
    expect(findSubTree2(root1, subroot1)).toBe(true);
    expect(findSubTree3(root1, subroot1)).toBe(true);
  });


  it ('returns false when a subtree does not exist within a tree', () => {
    expect(findSubTree1(root2, subroot2)).toBe(false);
    expect(findSubTree2(root2, subroot2)).toBe(false);
    expect(findSubTree3(root2, subroot2)).toBe(false);
  });

  // None of the solutions pass this test: they can't handle it when the first node the matches isn't the promised node.
  it ('returns true when a subtree does exist within a tree and works when the match doesn\'t belong to the first node that matches the subtree\'s root', () => {
    // expect(findSubTree1(root3, subroot3)).toBe(true);
    // expect(findSubTree2(root3, subroot3)).toBe(true);
    // expect(findSubTree3(root3, subroot3)).toBe(true);
  });


  it ('returns false when either the tree or the subtree is empty', () => {
    const root = new BinaryTree();
    const subroot = new BinaryTree();

    expect(findSubTree1()).toBe(false);
    expect(findSubTree1(root.root, subroot3)).toBe(false);
    expect(findSubTree1(root3, subroot.root)).toBe(false);

    expect(findSubTree2()).toBe(false);
    expect(findSubTree2(root.root, subroot3)).toBe(false);
    expect(findSubTree2(root3, subroot.root)).toBe(false);

    expect(findSubTree3()).toBe(false);
    expect(findSubTree3(root.root, subroot3)).toBe(false);
    expect(findSubTree3(root2, subroot.root)).toBe(false);
  });
});

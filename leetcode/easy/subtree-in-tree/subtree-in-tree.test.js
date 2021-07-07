'use strict';

const BinaryTree = require('./binary-tree-class');
const { findSubTree1, findSubTree2, findSubTree3 } = require('./subtree-in-tree');

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

  const tree1 = root1.root;
  const tree2 = root2.root;
  const subtree1 = subroot1.root;
  const subtree2 = subroot2.root;

  it ('returns true when a subtree exists within a tree', () => {
    expect(findSubTree1(root1, subroot1)).toBe(true);
    expect(findSubTree2(root1, subroot1)).toBe(true);


    expect(findSubTree3(tree1, subtree1)).toBe(true);
    console.log('Find subtree 3 result:', findSubTree3(tree1, subtree1));
    console.log('------------------------------------------------------------------\n');
  });


  it ('returns false when a subtree does not exist within a tree', () => {
    expect(findSubTree1(root2, subroot2)).toBe(false);
    expect(findSubTree2(root2, subroot2)).toBe(false);
    expect(findSubTree3(tree2, subtree2)).toBe(false);
    console.log('Find subtree 3 result:', findSubTree3(tree2, subtree2));
    console.log('------------------------------------------------------------------\n');

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

    expect(findSubTree3()).toBe(false);
    expect(findSubTree3(tree2, subroot3.root)).toBe(false);
    expect(findSubTree3(root3.root, subtree2)).toBe(false);
  });
});

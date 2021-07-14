'use strict';

const BinaryTree = require('./binary-tree-class');
const goodNodes = require('./good-nodes');

describe ('the function to return the number of "good" nodes in a binary tree', () => {
  const binaryTree1 = new BinaryTree();
  binaryTree1.addNode(3);
  binaryTree1.addNode(1);
  binaryTree1.addNode(4);
  binaryTree1.addNode(3);
  binaryTree1.addNode(null);
  binaryTree1.addNode(1);
  binaryTree1.addNode(5);

  const binaryTree2 = new BinaryTree();
  binaryTree2.addNode(3);
  binaryTree2.addNode(3);
  binaryTree2.addNode(null);
  binaryTree2.addNode(4);
  binaryTree2.addNode(2);

  const binaryTree3 = new BinaryTree();
  binaryTree3.addNode(1);

  const binaryTree4 = new BinaryTree();

  it ('returns the number of "good" nodes in a binary tree', () => {
    const root1 = binaryTree1.root;
    const root2 = binaryTree2.root;
    const root3 = binaryTree3.root;

    expect(goodNodes(root1)).toEqual(4);
    expect(goodNodes(root2)).toEqual(3);
    expect(goodNodes(root3)).toEqual(1);
  });

  it ('returns 0 when the binary tree is empty', () => {
    const root = binaryTree4.root;
    expect(goodNodes(root)).toEqual(0);
  });
});
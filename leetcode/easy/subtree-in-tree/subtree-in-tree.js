'use strict';

//------------------- Solution 1: BFS + DFS preorder + looping over an array --------------------
function findSubTree1(tree, subtree) {
  if (!tree || !subtree || !tree.root || !subtree.root) return false;

  const preOrder = tree => {
    if (!tree) return [];
    const results = [];
    let _walk = node => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(tree);
    return results;
  }

  const subtreePreOrder = subtree.preOrder();

  const queue = [];
  let queueIndex = 0;
  let resultsIndex = 0;
  queue[queueIndex] = tree.root;

  while (queue.length) {
    const current = queue[resultsIndex];
    if (current.value !== subtree.root.value) {
      if (current.left) { queue[++queueIndex] = current.left; }
      if (current.right) { queue[++queueIndex] = current.right; }
    } else {
      const match = preOrder(current);
      let i = match.length;
      while (i) {
        if (match[i] !== subtreePreOrder[i]) return false;
        else i--;
      }
      return true;
    }
    delete queue[resultsIndex];
    resultsIndex++;
  }
  return false;
}

//------------------ Solution 2: Breadth-first only --------------------
function findSubTree2(tree, subtree) {
  if (!tree || !subtree || !tree.root || !subtree.root) return false;
  return BFS(tree, subtree);
}

// This helper uses BFS to traverse through the main tree and compares the value of the nodes of the tree with the value of the subtree's root, calling isSub() if it finds a match and returning false otherwise.
function BFS(root, subroot) {
  const queue = [root.root];
  while (queue.length) {
    const current = queue.shift();
    if (current.value === subroot.root.value)
      if (isSub(current, subroot))
        return true;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
}

// This helper uses BFS to compare the descendents of the matching nodes, returning true if they all match and false otherwise.
function isSub(n, subtree) {
  const mainQueue = [n];
  const subQueue = [subtree.root];

  while (mainQueue.length || subQueue.length) {
    const mainNode = mainQueue.shift();
    const subNode = subQueue.shift();

    if (!mainNode && !subNode) continue;
    else if (!mainNode || !subNode) return false;

    if (mainNode.value !== subNode.value) return false;

    mainQueue.push(mainNode.left, mainNode.right);
    subQueue.push(subNode.left, subNode.right);
  }
  return true;
}

//---------------------- Solution 3: Recursion ---------------------
module.exports = { findSubTree1, findSubTree2 };

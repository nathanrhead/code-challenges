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
function findSubTree3(tree, subtree) {
  // Error checking for empty trees.
  if (!tree || !subtree) return false;

  // Checks to see whether (a) the root nodes are of equal value and, if so, whether their descendants match.
  else if (isSameTree(tree, subtree)) {
    return true;
  }
  
  // If the helper function returns false, the following calls the main function again with the next node in the tree, whether left or right.
  else return findSubTree3(tree.left, subtree) || findSubTree3(tree.right, subtree);
  
  // This helper function checks to see if the two trees match.
  function isSameTree(tree, subtree){
      if (!tree && !subtree) {
        return true;

      } else if (!tree || !subtree) return false;
        else if (tree.value === subtree.value) {
          return isSameTree(tree.left, subtree.left) && isSameTree(tree.right, subtree.right);
      }
      else return false;
  }
}

module.exports = { findSubTree1, findSubTree2, findSubTree3 };

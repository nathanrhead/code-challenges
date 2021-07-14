'use strict';

const goodNodes = root => {
  let counter = 0;
  if (!root) return counter;

  const traverse = (node, maxValue) => {
    // console.log({node}, {maxValue}, {counter});
    if (node.value >= maxValue) {
      counter++;
      maxValue = node.value;
    }
    if (node.left) traverse(node.left, maxValue);
    if (node.right) traverse(node.right, maxValue);
  }
  traverse(root, -Infinity);
  return counter;
}

module.exports = goodNodes;

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined  0 : val;
 *    this.neighbors = neighbors === undefined  [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
*/

class Node {
  constructor(value = 0, neighbors = []) {
    this.val = value;
    this.neighbors = neighbors
  }
}

// This DFS approach returns an adjacency list for testing purposes.
const cloneGraph = function(node) {  
  // If the input node is empty, return null
  if (!node) return [];
  
  // Initialize an empty dictionary clonedNodes to store mappings between original and cloned nodes.
  const clonedNodes = new Map();

  // Initialize an empty array to hold the relationships of each node, the value of which is represented by the array's index (starting at 1).
  const adjacencyList = [];

  // Define a recursive dfs function to traverse the graph.
  const _dfs = node => {
      // If the current node has been cloned (exists in clonedNodes), return the clone.
      if (clonedNodes.has(node.val)) return clonedNodes.get(node);

      // Otherwise, create a new node, store it in clonedNodes, and clone its neighbors by recursively calling dfs on each neighbor.
      const clone = new Node(node.val, node.neighbors);
      clonedNodes.set(node.val, clone);
      
      if (node.neighbors !== undefined) {
        for (let neighbor of node.neighbors) {
          if (neighbor) _dfs(neighbor);
        }
      }

      // Return the clone of the initial node.
      return clone;
  };

  // Start DFS from the given node (node with val == 1).
  _dfs(node);

  clonedNodes.forEach(node => {
      adjacencyList[node.val - 1] = node.neighbors.map(neighbor => neighbor.val);
  });

  return adjacencyList;
};

// This working DFS solution was posted by akunopaka on LeetCode. It won't pass the tests here, which require an adjacency list.
const cloneGraphDFS = function(node) {
  if (!node) return null;

  const dfs = (node, visited) => {
      if (visited.has(node)) return visited.get(node);

      const newNode = new Node(node.val);

      visited.set(node, newNode);
      
      for (let neighbor of node.neighbors) {
          newNode.neighbors.push(dfs(neighbor, visited));
      }

      return newNode;
  }

  return dfs(node, new Map());
};

// This BFS approach was posted by akunopaka on LeetCode. It also won't pass the tests here, which require an adjacency list.
const cloneGraphBFS = function (node) {
  if (!node) return null;

  const newNode = new Node(node.val);
  const queue = [node];
  const visited = new Map();

  visited.set(node, newNode);

  while (queue.length > 0) {
    const currentNode = queue.shift();

    for (let neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        const newNeighbor = new Node(neighbor.val);
        
        queue.push(neighbor);
        visited.set(neighbor, newNeighbor);
      }

      visited.get(currentNode).neighbors.push(visited.get(neighbor));
    }
  }
  return newNode;
};

module.exports = cloneGraph;

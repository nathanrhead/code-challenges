/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = function(n, edges) {
  // If there is only one node, return it.
  if (n === 1) return [0];

  // Step 1: Build the adjacency list to represent the graph.
  const graph = Array.from({ length: n}, () => []);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  // Step 2: Initialize the first layer of leaves (nodes with degree 1).
  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (graph[i].length === 1) leaves.push(i);
  }

  // Step 3: Remove leaves layer by layer until we reach the root.
  let remainingNodes = n;
  while (remainingNodes > 2) {
    // Count the nodes being removed.
    remainingNodes -= leaves.length;

    const newLeaves = [];

    for (const leaf of leaves) {
      const neighbor = graph[leaf].pop(); // Remove the leaf from the graph.
      graph[neighbor] = graph[neighbor].filter(node => node !== leaf); // Remove the leaf from its neighbor.

      // if the neighbor becomes a leaf, add it to the new leaves.
      if (graph[neighbor].length === 1) newLeaves.push(neighbor);
    }
    
    // Update the leaves for the next iteration.
    leaves = newLeaves;
  }

  // Step 4: Return the remaining nodes as the root of the MHT.
  return leaves;
};

module.exports = findMinHeightTrees;

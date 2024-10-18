'use strict';

const solution = require('./clone-graph');

/*
  node: { 
    val: 1,
    neighbors: [ 
      { 
        val: 2, 
        neighbors: [ [Object], [Object] ] 
      },
      { 
        val: 4, 
        neighbors: [ [Object], [Object] ] 
      }
    ] 
  } 
*/

class Node {
  constructor(value = 0, neighbors = []) {
    this.val = value;
    this.neighbors = neighbors;
  }
}

class Graph {
  constructor(adjList) {
    this.nodes = new Map();
    this.createGraph(adjList);
  }

  // Method to create the graph from the adjacency list
  createGraph(adjList) {
    // Step 1: Create all nodes first.
    for (let i = 0; i < adjList.length; i++) {     
      let val = i + 1;
      this.nodes.set(val, new Node(val));
    }

    // Step 2: Link nodes based on the adjacency list.
    for (let i = 0; i < adjList.length; i++) {
      const node = this.nodes.get(i + 1); // Get the current node.
      const neighbors = adjList[i]; // Get its neighbors.

      // Connect the current node with its neighbors.
      neighbors.forEach(neighborVal => {
        const neighborNode = this.nodes.get(neighborVal);

        node.neighbors.push(neighborNode);
      });
    }
  }

  // Method to get a node by its value
  getNode(val) {
    return this.nodes.get(val);
  }
}

describe ('leetcode challenge to return a clone of an undirected, cyclic, connected graph', () => {
  it ('returns an adjacency list representing the graph', () => {
    const graphOne = new Graph([[2,4],[1,3],[2,4],[1,3]]);
    const graphTwo = new Graph([[]]);
    const graphThree = new Graph([]);

    expect(solution(graphOne.getNode(1))).toEqual([[2,4],[1,3],[2,4],[1,3]]);
    expect(solution(graphTwo.getNode(1))).toEqual([[]]);
    expect(solution(graphThree.getNode(1))).toEqual([]);
  });
});

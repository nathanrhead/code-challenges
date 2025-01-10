# LeetCode Challenge #310: Minimum Height Trees | Rating: Medium

## Task

A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

Return a list of all MHTs' root labels. You can return the answer in any order.

The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

## Example 1

![Diagram of all possible trees](https://assets.leetcode.com/uploads/2020/09/01/e1.jpg)

Input: n = 4, edges = [[1,0],[1,2],[1,3]]  
Output: [1]  
Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.

## Example 2

![Diagram of all possible trees](https://assets.leetcode.com/uploads/2020/09/01/e2.jpg)

Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]  
Output: [3,4]

## Constraints

- 1 <= n <= 2 * 104
- edges.length == n - 1
- 0 <= ai, bi < n
- ai != bi
- All the pairs (a<sub>i</sub>, b<sub>i</sub>) are distinct.
- The given input is guaranteed to be a tree and there will be no repeated edges.

## Approach

1. Identify the Center(s) of the Graph:
    - The center(s) of the graph can be found using a topological pruning approach, also known as the leaf-removal process:
      - Start by identifying all leaf nodes (nodes with only one connection).
      - Iteratively remove the leaves, updating the degree of their neighbors, until you are left with at most two nodes.
      - These remaining node(s) are the center(s) of the graph.

2. Why It Works:
    - The nodes that can serve as roots of MHTs are always located in the center(s) of the graph. The center of a tree (or a graph treated as a tree) is defined as:
      - One node, if the tree has an odd number of levels.
      - Two adjacent nodes, if the tree has an even number of levels.
    - By removing the leaves, you are gradually reducing the height of the tree until the core (center) is reached. The center minimizes the maximum distance to any other node in the graph, making it the root of an MHT.

## Algorithm

1. Count the degree of each node.
2. Start with all nodes of degree 1 (leaves).
3. Remove leaves iteratively, updating the degrees of their neighbors.
4. Stop when there are 1 or 2 nodes left.
    - If there is 1 node left, return it as the root of the MHT.
    - If there are 2 nodes left, return both as they are the roots of the two possible MHTs.

## Big O

- Time: O(n)
  - Building the graph: O(n), where n is the number of nodes.
  - Leaf pruning: O(n), since each edge and node is processed once.
- Space: O(n)
  - Adjacency list: O(n).
  - Leaves storage: O(n).

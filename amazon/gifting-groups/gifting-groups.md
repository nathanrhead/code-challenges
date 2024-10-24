# HackerRank Challenge: Gifting Groups

## Task

A subscriber can gift an audiobook from his/her library to any other non-subscriber to kickstart their audiobook journey. The first-time subscriber can receive up to a maximum of N audiobooks from their friends/relatives. When a non-subscriber receives an audiobook, we can infer that the two may be related. Similarly, if the non-subscriber receives gifted books from two other subscribers, we can infer that all of them are related and the three of them form a group.

More formally, a group is composed of all of the people who know one another, whether directly or transitively.

Audible would like your help finding out the number of such distinct groups from the input data.

## Example

Consider the following input matrix:

```json
110  
110  
001  

   012  
0 '110'  
1 '110'  
2 '001'
```

Every row corresponds to a subscriber and the value `M[i][j]` determines if `j` was gifted a book by `i`. In the above example, user 0 has gifted a book to user 1, and so they are connected `[0][1]`, while person 2 has not received a book from anyone or gifted a book to anyone. Therefore, there are 2 groups. `M[i][j] = 1` if `i==j` (each of the people is known to self).

Determine the number of groups represented in a matrix.

## Function Description

Complete the function countGroups.

- `countGroups` has the following parameter(s):
  - `int related[n]`: an array of strings of binary digits `related[i]` that represent connections of people.
- Returns: an integer that represents the number of groups of people.

## Constraints

- `1 <= n <= 300`
- `0 <= i < n`
- `/related/ = n`
- Each `related[i]` contains a binary string of `n` zeros and ones. `related` is a square matrix.

## Approach

1. Model the problem as a graph:

    - Treat each person as a node.
    - A value of 1 in the matrix at position (i, j) means there’s an edge between node i and node j.

2. Use DFS or BFS to explore connected components:

    - Start from each unvisited node, explore all nodes connected to it, and mark them as visited.
    - Each time you start a DFS/BFS from an unvisited node, increment your group count because you’ve found a new group.

## Steps

1. Initialize a visited array to track which nodes have been visited.
2. For each unvisited node, start a DFS/BFS to mark all connected nodes as visited.
3. Count how many times you initiate DFS/BFS, which will give the number of distinct groups.

## Notes

- Time Complexity: O(n^2) where n is the number of people. This is because for each node, we might need to visit every other node.
- Space Complexity: O(n) due to the visited array and the recursive call stack in DFS.

## Test Case Whiteboard: Depth-first Search

![Whiteboard of a test case for each value.](./test-case-whiteboard.png)

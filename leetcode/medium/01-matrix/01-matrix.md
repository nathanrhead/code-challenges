# LeetCode Challenge #542: 01 Matrix | Rating: Medium

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

## Example 1

Input: mat = [[0,0,0],[0,1,0],[0,0,0]]  
Output: [[0,0,0],[0,1,0],[0,0,0]]

## Example 2

Input: mat = [[0,0,0],[0,1,0],[1,1,1]]  
Output: [[0,0,0],[0,1,0],[1,2,1]]

## Constraints

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 104`
- `1 <= m * n <= 104`
- `mat[i][j] is either 0 or 1`
- `There is at least one 0 in mat`

## Notes

- This BFS algorithm comes from ChatGPT.
- Time complexity = O(m * n), where m is the number of rows and n is the number of columns.
- Space complexity = O(m * n), due to the space used for the queue and the distance matrix.
- This algorithm beats 100% of JS solutions for time and 46% for space.

## The algorithm

1. Initialize a queue with the coordinates of all 0s in the matrix and a matrix with the distance of all 1s set to infinity.
2. For each cell in the queue:

- Check its neighboring cells (up, down, left, right) in the distance matrix.
- If the distance to any neighboring cell is greater than the current cell’s distance + 1, update the neighboring cell’s distance by changing it to the cell's distance + 1 and add that neighboring cell's coordinates to the queue.

3. Return the modified matrix where each cell contains the distance to the nearest 0.

## Example

Input:

```json
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
```

Output:

```json
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
```

Initial queue: stores coordinates of the zeros, but eventually will also have the coordinates of the non-zero nodes.

```json
[
  [ 0, 0 ], [ 0, 1 ], [ 0, 2 ], 
  [ 1, 0 ],           [ 1, 2 ], 
  [ 2, 0 ], [ 2, 1 ], [ 2, 2 ]
]
```

Initial distance matrix:

```json
[ 
  [ 0, 0, 0 ], 
  [ 0, Infinity, 0 ], 
  [ 0, 0, 0 ] 
]
```

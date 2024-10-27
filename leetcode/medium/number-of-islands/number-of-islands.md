# LeetCode Challenge # 200: Number of Islands | Rating: Medium

Given an m x n, 2-D, binary grid that represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

## Example 1

Input:

```text
[
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
```

Output: 1

## Example 2

Input:

```text

[
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
```

Output: 3

## Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 300`
- `grid[i][j]` is '0' or '1'.

## Notes

- This solution, from ChatGPT, uses depth-first search to visit each island recursively, sinking it along the way to ensure an accurate count. 
- Big O
  - Time: O(m * n), where m is the number of rows and n is the number of columns, as each cell is visited once. (Not O(n^2), because the grid isn't square.)
  - Space: O(m * n) in the worst case for the recursion stack in DFS.

# LeetCode Challenge #62: Unique Paths | Rating: Medium

## Task

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., `grid[0][0]`). The robot tries to move to the bottom-right corner (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

## Example 1

![Picture of the grid, the robot, and the goal.](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)

Input: m = 3, n = 7  
Output: 28

## Example 2

Input: m = 3, n = 2  
Output: 3  
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:

1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

## Constraints

- 1 <= m, n <= 100

## Observations

1. The robot can only move right or down.
2. To reach any cell (i, j) on the grid, the robot must come from either:

    - The cell directly above it (i-1, j) (if i > 0).
    - The cell directly to the left of it (i, j-1) (if j > 0).

3. This gives the recurrence relation: `paths[i][j] = paths[i-1][j] + paths[i][j-1]`.
4. The base case: The top-left corner (0, 0) has exactly one path to itself: `paths[0][0] = 1`.
5. Instead of maintaining a full m x n grid, we can optimize space usage by keeping track of just one row (or one column) at a time, since the result for the current row only depends on the previous row.

## The key Insight

The number of ways to reach a cell is the sum of the ways to reach the cell from above and from the left.

For example, to get to cell (1, 1), you can:
  
- Come down from (0, 1), or
- Go right from (1, 0)

So: `paths[1][1] = paths[0][1] + paths[1][0]`.

Or: `paths[i][j] = paths[i-1][j] + paths[i][j-1]`.

## The Base Case

The first row and first column are special:

- You can only reach cells in the first row by moving right.
- You can only reach cells in the first column by moving down.

So:

- `paths[0][j] = 1 (for all j)`
- `paths[i][0] = 1 (for all i)`

Which is why i and j each start at 1.

## Algorithm: Dynamic Programming

1. Create an array to store the number of paths to each cell in a row.
2. Initialize the first row to all 1s.
3. For each row, update the array cell-by-cell: `dp[j] = dp[j] + dp[j-1]`.
4. The last cell of the last row contains the total unique paths.

## Note on the ALgorithm

In the space-optimized approach, we use a single row to represent all the `paths[i][j]` values for the current row.

- dp[j]: Represents the number of paths to cell (i, j).
- dp[j-1]: Represents the number of paths to cell (i, j-1) (to the left of (i, j)).

## Visualizing a 3 x 3 Grid

1. Start with the first row and column.

    ```text
    1  1  1  
    1  _  _  
    1  _  _
    ```

2. Fill the rest using the formula.

    ```text
    1  1  1  
    1  2  3  
    1  3  6
    ```

3. Explanation.

    - At (1, 1): above + left = 1 + 1 = 2
    - At (1, 2): above + left = 1 + 2 = 3
    - At (2, 1): above + left = 1 + 2 = 3
    - At (2, 2): above + left = 3 + 3 = 6

## Big O

- Time: O(m x n), since we iterate over all cells in the grid.
- Space: O(n), as we only store the current row.

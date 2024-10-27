/**
 * @param {character[][]} grid
 * @return {number}
 */

const numIslands = function(grid) {
  if (!grid || !grid.length) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCounter = 0;

  // Depth-first search.
  const _dfs = (i, j) => {
    // Base case: out of bounds or water.
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === '0') return;

    // Mark the cell as visited by setting it to '0'.
    grid[i][j] = '0';

    // Recursion case: check cardinal directions for land.
    _dfs(i - 1, j); // North.
    _dfs(i + 1, j); // South.
    _dfs(i, j + 1); // East.
    _dfs(i, j - 1); // West.
  }

  // Loop through each cell.
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        islandCounter++;
        _dfs(i, j);
      }
    }
  }

  return islandCounter;
};

module.exports = numIslands;

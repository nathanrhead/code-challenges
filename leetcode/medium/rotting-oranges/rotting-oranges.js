/**
 * @param {number[][]} grid
 * @return {number}
 */

// ChatGPT's approach using breadth-first search.
const orangesRotting = function(grid) {
  if (!grid || !grid.length) return -1;

  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const queue = [];
  let minutes = 0, freshOranges = 0;

  // Initialize the queue with all rotten oranges and count fresh oranges.
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) queue.push([r, c, 0]); // [row, col, minute]
      else if (grid[r][c] === 1) freshOranges++;
    }
  }

  while (queue.length) {
    const [row, col, minute] = queue.shift();
    minutes = Math.max(minutes, minute);

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === 1) {
        grid[newRow][newCol] = 2;
        freshOranges--;
        queue.push([newRow, newCol, minute + 1]);
      }
    }
  }

  return !freshOranges ? minutes : -1;
};

module.exports = orangesRotting;

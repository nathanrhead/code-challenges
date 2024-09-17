'use strict';

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

/* Depth-First Search (DFS) algorithm. */
const floodFill = function(image, sr, sc, color) {
  // Save the current cell's starting color in a constant.
  const startingColor = image[sr][sc];

  // Set the number of rows and number of columns.
  const rows = image.length;
  const cols = image[0].length;

  // If the image at (sr, sc) already has the new color, no action is required.
  if (image[sr][sc] === color) return image;

  // Recurse through the cardinal direction check.
  function dfs(row, col) {
    // Check for boundaries.
    if (row < 0 || row >= rows || col < 0 || col >= cols || image[row][col] !== startingColor) return;

    // Otherwise, change the current cell's color to the new color.
    image[row][col] = color;

    // Apply the color change in the cardinal directions recursively.
    dfs(row + 1, col) // Down.
    dfs(row - 1, col) // Up.
    dfs(row, col + 1) // Right.
    dfs(row, col - 1) // Left.
  }

  // Call the depth-first-search helper function.
  dfs(sr, sc); 

  // Return the modified image.
  return image;
};

module.exports = floodFill;

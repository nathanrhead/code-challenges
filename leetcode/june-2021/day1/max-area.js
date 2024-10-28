'use strict';

function islandArea(grid) {
  if (!grid) return 0;

  let maxArea = 0;
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
     maxArea = Math.max(maxArea, area(i, j, grid));
    }
  }
  return maxArea;
}

// Depth-first search function (used for trees and graphs)
function area(i, j, grid) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) return 0;

  grid[i][j] = 0; // Set the value of the grid at [i][j] to zero in order to avoid counting it twice.
  let count = 1
  count += area(i+1, j, grid);
  count += area(i-1, j, grid);
  count += area(i, j-1, grid);
  count += area(i, j+1, grid);

  return count;
}

module.exports = islandArea;

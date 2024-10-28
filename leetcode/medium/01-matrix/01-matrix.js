/**
 * @param {number[][]} mat
 * @return {number[][]}
*/

const updateMatrix = function(mat) {
  let rows = mat.length;
  let cols = mat[0].length;
  let queue = []; // Array of all nodes' coordinates, initially populated with the matrix's zeros' coordinates.
  let dist = Array.from({ length: rows }, () => Array(cols).fill(Infinity)); // Array of distances to return.

  // Enqueue all the 0s and set their distance to 0.
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 0) {
        dist[r][c] = 0;
        queue.push([r, c]);
      }
    }
  }

  // Directions for moving in the matrix (right, left, down, up).
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  // Perform BFS.
  while (queue.length > 0) {
    const [r, c] = queue.shift(); // The coordinates, from the queue, of the node whose neighbors need to be considered.

    // Explore neighbors.
    for (let [dr, dc] of directions) {
      const nr = r + dr, nc = c + dc; // Set the neighbor's coordinates.

      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) { // Keep the indices within the bounds of the matrix.
        // If we find a shorter path to the neighboring cell, update it.
        if (dist[nr][nc] > dist[r][c] + 1) {
          dist[nr][nc] = dist[r][c] + 1;
          queue.push([nr, nc]);
        }
      }
    }
  }

  return dist;
};

module.exports = updateMatrix;

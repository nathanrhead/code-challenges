/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function(matrix) {
  if (!matrix.length) return matrix;

  const results = [];
  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
      // Traverse from left to right.
      for (let i = left; i <= right; i++) {
          results.push(matrix[top][i]);
      }

      // Move the top boundary down.
      top++;

      // Traverse from top to bottom.
      for (let i = top; i <= bottom; i++) {
          results.push(matrix[i][right]);
      }

      // Move the right border left.
      right--;

      if (top <= bottom) {
          // Traverse from right to left.
          for (let i = right; i >= left; i--) {
              results.push(matrix[bottom][i]);
          }

          // Move the bottom boundary up.
          bottom--;
      }

      if (left <= right) {
          // Traverse from bottom to top.
          for (let i = bottom; i >= top; i--) {
              results.push(matrix[i][left]);
          }
          
          // Move the left boundary to the right.
          left++;
      }
  }

  return results;
};

module.exports = spiralOrder;

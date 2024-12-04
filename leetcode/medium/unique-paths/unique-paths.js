/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
  console.log({m, n});

  // Initialize a one-dimensional array for the current row and fill it with 1s, with n being the number of columns.
  const dp = Array(n).fill(1);

  console.log({dp});

  // Iterate through the rows from 1 to m - 1.
  for (let i = 1; i < m; i++) {
    console.log('Row: ', i + 1);

    // Update the row values using the previous row values.
    for (let j = 1; j < n; j++) {
      console.log('Column:', j + 1);

      dp[j] += dp[j - 1];

      console.log({dp});
    }
  }
  
  console.log({dp});

  // The last elemnt of the array contains the number of unique paths.
  return dp[n - 1];
};

module.exports = uniquePaths;

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = (nums) => {
  const totalSum = nums.reduce((a, b) => a + b, 0);
  
  // Return false if the total sum is odd.
  if (totalSum % 2 !== 0) return false;
  
  // The target sum is half of the total sum.
  const target = totalSum / 2;

  console.log({target});

  // Initialize the dp array with the target sum.
  const dp = new Array(target + 1).fill(false);

  // The sum of 0 is always possible.
  dp[0] = true;

  // Iterate through the numbers and update the dp array.
  for (const num of nums) {

    console.log({num});

      for (let i = target; i >= num; i--) {

        console.log({i});
        console.log('dp[i]: ', dp[i]);
        console.log('dp[i - num]: ', dp[i - num]);

        // dp[i] represents whether a subset with a sum of i can be achieved.
        // dp[i - num] checks whether a subset with a sum of i - num can be achieved before considering the current number (num).
        dp[i] = dp[i] || dp[i - num];

        console.log({dp});

      }

      console.log('----------------------');
  }

  return dp[target];
};

module.exports = canPartition;

// Dynamic-programming approach.
function coinChangeDP(coins, amount) {
  // Create an array to store the minimum coins needed for each amount from 0 to amount, e.g., if target = 4, 0, 1, 2, 3, 4.
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // No coins are needed to make the amount 0.

  // Loop through each coin.
  for (const coin of coins) {
    // Update the dp array for amounts from coin to amount.
    for (let x = coin; x <= amount; x++) {
      // Determine the smallest number of coins that can be summed to acheive x. 
      dp[x] = Math.min(dp[x], dp[x - coin] + 1);
    }
  }

  // If dp[amount] is still Infinity, return -1 (not possible to form amount)
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Breadth-first search.
function coinChangeBFS(coins, amount) {
  const queue = [{ amount: 0, numCoins: 0 }];
  const visited = new Set();

  while (queue.length > 0) {
    const { amount: currentAmount, numCoins } = queue.shift();

    if (currentAmount === amount) {
      return numCoins;
    }

    for (const coin of coins) {
      const newAmount = currentAmount + coin;

      if (newAmount <= amount && !visited.has(newAmount)) {
        visited.add(newAmount);
        queue.push({ amount: newAmount, numCoins: numCoins + 1 });
      }
    }
  }

  return -1; // Not possible to make up the amount
}

module.exports = { coinChangeDP, coinChangeBFS };

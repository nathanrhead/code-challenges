/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = prices => {
    // Base cases.
    if (!prices.length || prices.length === 1) return 0;

  // Cache for dynamic programming: reusing the results of solving the sub-problem.
  let buy = prices[0]; // Find the smallest number in the array.
  let profit = 0; // Find the biggest difference between prices[i] and the smallest number in the array.

  for (let i = 1; i < prices.length; i++) {
    buy = Math.min(prices[i], buy);
    profit = Math.max(profit, prices[i] - buy);
  }

  return profit;
};

module.exports = maxProfit;

/**
 * Step through:
 * Input: [7,1,5,3,6,4]
 * Output: 5
 * 
 * i: 0, buy: 7, profit: 0.
 * i: 1, buy: 1, profit: 1.
 * i: 2, buy: 1, profit: 4.
 * i: 3, buy: 1, profit: 4.
 * i: 4, buy: 1, profit: 5.
 * i: 5, buy: 1, profit: 5.
 */
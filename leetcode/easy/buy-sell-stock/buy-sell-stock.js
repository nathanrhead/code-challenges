/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = prices => {
  let buy = prices[0];
  let profit = 0;

  for (i = 1; i < prices.length; i++) {
      if (prices[i] < buy) buy = prices[i];
      if (prices[i] - buy > profit) profit = prices[i] - buy;
  }

  return profit;
};

module.exports = maxProfit;

# Leetcode | Best Time to Buy and Sell Stock | Easy

## Task

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

## Example 1

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

## Example 2

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

## Example 3

Inputs: Prices = [1,2]
Output: 1

## Constraints

1 <= prices.length <= 105
0 <= prices[i] <= 104

## Source of the Solution

ChatGPT

## Algorithm: Dynamic Programming

1. Base case: return 0 if the prices array is empty or if it only has one entry.
2. Set up a DP cache that re-uses the results of the sub-problem.

    - `let buy = prices[0]` -> the smallest number in the array.
    - `let profit = 0` -> the largest difference between prices[i] and the smallest number in the array.

3. Loop through the prices array to set the buy and profit variables.

    ```JavaScript
      for (let i = 1; i < prices.length; i++) {
        buy = Math.min(prices[i], buy);
        profit = Math.max(profit, prices[i] - buy);
      }
    ```

4. Return the profit variable.

## Walk-through

Input: [7,1,5,3,6,4]
Output: 5

- i: 0, buy: 7, profit: 0
- i: 1, buy: 1, profit: 1
- i: 2, buy: 1, profit: 4
- i: 3, buy: 1, profit: 4
- i: 4, buy: 1, profit: 5
- i: 5, buy: 1, profit: 5

## Big O

- Time: O(n) because the for-loop visits every value of the prices array.
- Space: O(1) because the buy, profit, and the loop counter are constant variables.

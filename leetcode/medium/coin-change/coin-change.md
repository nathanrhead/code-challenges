# LeetCode Challenge #322: Coin Change | Rating: Medium

## Task

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

## Example 1

Input: coins = [1,2,5], amount = 11  
Output: 3  
Explanation: 11 = 5 + 5 + 1

## Example 2

Input: coins = [2], amount = 3  
Output: -1  

## Example 3

Input: coins = [1], amount = 0  
Output: 0

## Constraints

- 1 <= coins.length <= 12
- 1 <= coins[i] <= 231 - 1
- 0 <= amount <= 104

## Big O

- Time: O(n x m)
  - Outer Loop: This iterates over each coin in the coins array, which takes  O(n) , where  n  is the number of coins.
  - Inner Loop: For each coin, this iterates through all amounts from the coin’s value to the target amount. In the worst case, this takes  O(m) , where  m  is the target amount.
  - This solution ranks in the 87th percentile.

- Space: O(m)
  - The space complexity is determined by the dp array, which is of size  m + 1  (to accommodate amounts from 0 to m).
  - This solution ranks in the 75th percentil.

## Notes

- This is ChatGPT's solution and utilizes dynamic programming to optimize the solution.
- My thoughts are that one has to understand the pattern of how the numbers relate to each other in the dp array to calculate the minimum number of coins required at each level or just memorize the formula.
- There's also a breadth-first-search approach, also by ChatGPT, that can be more efficient when there are fewer denominations or smaller amounts.

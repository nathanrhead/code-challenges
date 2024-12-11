# LeetCode Challenge #79: Word Search | Rating: Medium

## Task

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

## Example 1

![Graphic of a matrix](https://assets.leetcode.com/uploads/2020/11/04/word2.jpg)

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"  
Output: true

## Example 2

![Graphic of a matrix](https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg)

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"  
Output: true

## Example 3

![Graphic of a matrix](https://assets.leetcode.com/uploads/2020/10/15/word3.jpg)

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"  
Output: false

## Constraints

- m == board.length
- n = board[i].length
- 1 <= m, n <= 6
- 1 <= word.length <= 15
- board and word consists of only lowercase and uppercase English letters.

## Algorithm

This task presents a classic depth-first search (DFS) problem.

1. Iterate over the grid: Start from each cell in the grid.
2. Depth-first search: For each cell, use DFS to explore all valid paths.
3. Backtracking: If a path doesn’t lead to a solution, backtrack and explore another path.
4. Edge cases: Handle cases where the grid or word is empty.

## Big O

- Time: O(m x n x 3^L), where L is the length of the word.
  - For a single DFS, the time complexity is O(3^L), the 3 representing the possible remaining directions.
  - Each cell is visited once.
- Space: O(L) for the recursion stack.

## Follow-up Challenge

Can you use search pruning to make your solution faster with a larger board?

1. Pre-check Word Feasibility:
    - Count the frequency of each character in the board and the word.
    - If any character in the word occurs more times than in the board, return false immediately, avoiding unnecessary DFS exploration for impossible cases.
2. Dynamic Start Points: Start searching from cells that match the first character of the word. This avoids exploring irrelevant starting points.
3. Order of Exploration: Sort the exploration order based on heuristic rules, such as moving toward regions with higher densities of characters matching the word.
4 Terminate Early in DFS: If the remaining number of cells in the current path is smaller than the remaining characters of the word, terminate the search early.

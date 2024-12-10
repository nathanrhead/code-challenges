# LeetCode Challenge #17: Letter Combinations of a Phone Number | Rating: Medium

## Task

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![Graphic of a cellphone's keypad] (https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png)

## Example 1

Input: digits = "23"  
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

## Example 2

Input: digits = ""  
Output: []

## Example 3

Input: digits = "2"  
Output: ["a","b","c"]

## Constraints

- 0 <= digits.length <= 4
- digits[i] is a digit in the range ['2', '9'].

## Algorithm: Backtrack recursively

1. Create a map of numbers to letters and instantiate an empty results array.
2. Create a function called "backtrack".
    - Base case: if the index equals the length of the string of digits passed to the letterCominations functions, push the current combination to the results array and return out of the backtrack function.
    - Create a variable of available letters from the map based on the digit at the current index.
    - Loop through the letters.
      - Push the character into the combo array.
      - Call backtrack with index + 1 and the combo array.
      - Pop the last letter off the combo array to create other combinations.
3. Call the backtrack array for the first time with an index of 0 and an empty array.
4. Return the results array.

## Big O

- Time: O(3^n x 4^m), where n is the number of digits mapping to 3 letters and m is the number of digits mapping to 4 letters (i.e., 7 and 9).
- Space: O(4^n), representing the results array, where n is the number of digits and 4 the greatest number of letters possibly associated with each digit.

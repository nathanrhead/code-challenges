# LeetCode Challenge #5: Longest Palindrome Substring | Rating: Medium

Given a string s, return the longest palindromic substring in s.

## Example 1

Input: s = "babad"  
Output: "bab"  
Explanation: "aba" is also a valid answer.

## Example 2

Input: s = "cbbd"  
Output: "bb"

## Constraints

- 1 <= s.length <= 1000
- s consist of only digits and English letters.

## Notes

- This is ChatGPT's approach, which it calls the expand-around-center solution, the center of a palindrome either being a single character, if odd, or two identical characters, if even.
- The solution depends on a helper function that returns the length of a palindrome by expanding left and right points around the center of the palindrome.
- Once the palindrome's indices are found, the substring is returned with the help of the substring(start, end) method.

## Big O

- Time: O(n^2) characterizes repeated expansions over a string of length n, as in this solution.
- Space: O(1) because indicies are being stored in variables.

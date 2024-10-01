# Leetcode Challenge #409: Longest Palindrome | Rated: Easy

## Task

Given a string s that consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.

## Example 1

Input: s = "abccccdd"  
Output: 7  
Explanation: The longest palindrome that can be built is "dccaccd", whose length is 7.

## Example 2

Input: s = "a"  
Output: 1  
Explanation: The longest palindrome that can be built is "a", whose length is 1.

## Constraints

- 1 <= s.length <= 2000
- s consists of lowercase and/or uppercase English letters only.

## Notes

- I first tried to solve this problem using a stack, popping off the top of the stack whenever it met a matching character in the loop, but that approach doesn't work when the letters are more random and less continguous.
- I got my solution from the user "gorkiy," who posted it on the "Solutions" tab of the LeetCode challenge.
- I worked through the solution on a whiteboard, before coding it out and testing it.
- The time and space complexity of this solution is O(n), n being the number of characters in the string.

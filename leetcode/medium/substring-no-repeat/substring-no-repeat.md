# LeetCode Challenge #3: The Longest Substring without Repeated Characteres | Rating: Medium

Given a string s, find the length of the longest substring without repeating characters.

## Example 1

Input: s = "abcabcbb"  
Output: 3  
Explanation: The answer is "abc", with the length of 3.

## Example 2

Input: s = "bbbbb"  
Output: 1  
Explanation: The answer is "b", with the length of 1.

## Example 3

Input: s = "pwwkew"  
Output: 3  
Explanation: The answer is "wke", with the length of 3.  
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

## Constraints

- 0 <= s.length <= 5 * 104
- s consists of English letters, digits, symbols and spaces.

## Notes

- I was on the right track with using a map, but didn't have the two-pointer solution that elimates the first of two repeated characters, allowing the characters inbetween the two repeated ones to remain, e.g., 'dvdf'.
- This solution came from ChatGPT and beats 100% of JS solutions for time and 38% for memory.
- Time complexity = O(n) where n is the length of the string; each character is processed at most twice, once when expanding the window and once when shrinking it.
- Space complexity = O(min(n, m)), where n is the length of the string and m is the number of possible characters (e.g., 26 for lowercase English letters); the set stores up to n unique characters at most.

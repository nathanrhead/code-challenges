# LeetCode Challenge #438: Find All Anagrams in a String | Rating: Medium

## Task

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

## Example 1

Input: s = "cbaebabacd", p = "abc"  
Output: [0,6]  
Explanation:  
The substring with start index = 0 is "cba", which is an anagram of "abc".  
The substring with start index = 6 is "bac", which is an anagram of "abc".

## Example 2

Input: s = "abab", p = "ab"  
Output: [0,1,2]  
Explanation:  
The substring with start index = 0 is "ab", which is an anagram of "ab".  
The substring with start index = 1 is "ba", which is an anagram of "ab".  
The substring with start index = 2 is "ab", which is an anagram of "ab".

## Constraints

- 1 <= s.length, p.length <= 3 * 104
- s and p consist of lowercase English letters.

## Algorithm

Use the sliding window technique combined with frequency counting.

1. Frequency Count: Create a frequency map for p to count how many times each character appears.
2. Sliding Window:
    - Use a sliding window of size p.length over s.
    - Maintain a frequency map for the characters in s that fit in the current window.
    - At each step, check if the frequency map of the window matches the frequency map of p; if it does, push the left (start) index to the result array.
3. Optimization: Instead of recalculating the frequency map for every window, adjust the map by adding the new character (entering the window) and removing the old character (leaving the window).

## Big O

- Time: O(n)
  - Initializing and updating frequency arrays: O(26), which is constant.
  - Sliding through s: O(n), where n is the length of s.
- Space: O(1) for the frequency arrays of size 26.

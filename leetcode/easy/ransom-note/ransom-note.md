# LeetCode Challenge #383: Ransom Note | Rating: Easy

## Task

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

## Example 1

Input: ransomNote = "a", magazine = "b"  
Output: false

## Example 2

Input: ransomNote = "aa", magazine = "ab"  
Output: false

## Example 3

Input: ransomNote = "aa", magazine = "aab"  
Output: true

## Constraints

- 1 <= ransomNote.length, magazine.length <= 105
- ransomNote and magazine consist of lowercase English letters.

## Notes

- This is really the first code challenge that I did (a) without using any references and (b) within the expected timeframe.
- I used two for-loops, so the time complexity would be O(n), since consecutive loops don't increase the time required to run the script as nested for-loops do.

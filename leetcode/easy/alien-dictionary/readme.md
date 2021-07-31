# Leetcode Challenge #953 | Verifying an Alien Dictionary | 28 July 2021 | Rating: Easy

## Task

In an alien language they also use English lowercase letters, though the order of the alphabet is different.

Given a sequence of words written in the alien language and the order of the alphabet, return true if and only if the given words are sorted alphabetically.

## Constraints

- 1 <= words.length <= 100
- 1 <= words[i].length <= 20
- order.length == 26
- All characters in words[i] and order are English lowercase letters.

## Example 1

- Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"  
- Output: true  
- Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.  

## Example 2

- Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"  
- Output: false  
- Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.  

## Example 3

- Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"  
- Output: false  
- Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

## Big O

- Space: O(1) for the minWordLength variable; this solution took up less space than 72.13% of JavaScript solutions on leetcode.
- Time: O(n^2) for nested for-loop; this solution was rated faster than 99.39% of submissions in JavaScript on leetcode.

## Authors

- Tahmina Ringer
- Dina Ayoub
- Nathan Cox

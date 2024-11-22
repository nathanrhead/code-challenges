# LeetCode Challenge #139: Word Break | Rating: Medium

## Task

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

## Example 1

Input: s = "leetcode", wordDict = ["leet","code"]  
Output: true  
Explanation: Return true because "leetcode" can be segmented as "leet code".

## Example 2

Input: s = "applepenapple", wordDict = ["apple","pen"]  
Output: true  
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple". Note that you are allowed to reuse a dictionary word.

## Example 3

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

## Example 4

Input: s = "bb", wordDict = ["a","b","bbb","bbbb"]
Output: true  
Explanation: Each letter "b" as a substring exists in the dictionary.

## Constraints

- 1 <= s.length <= 300
- 1 <= wordDict.length <= 1000
- 1 <= wordDict[i].length <= 20
- s and wordDict[i] consist of only lowercase English letters.
- All the strings of wordDict are unique.

## GitHub Copilot's Solution

To solve the "Word Break" problem, we can use dynamic programming. The idea is to use a boolean array dp where dp[i] indicates whether the substring s[0...i-1] can be segmented into words from the dictionary.

1. Initialize a boolean array dp of size n+1--where n is the length of the string s--with all values set to false. Set dp[0] to true because an empty string can always be segmented.
2. Iterate through the string s from 1 to n.
3. For each position i, check all possible substrings s[j...i-1] where j ranges from 0 to i-1.
4. If dp[j] is true and the substring s[j...i-1] is in the dictionary, set dp[i] to true.
5. Finally, return dp[n] which indicates whether the entire string s can be segmented.

## Big O

- Time: O(n^2) for the nested for-loops.
- Space: O(n) for the dp array, which is of n + 1 length, where n is the length of the string.

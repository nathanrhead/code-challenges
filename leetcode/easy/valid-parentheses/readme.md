# Leetcode | Valid Parentheses | Easy

## Task

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

### Example 1

Input: s = "()"
Output: true

### Example 2

Input: s = "()[]{}"
Output: true

### Example 3

Input: s = "(]"
Output: false

### Example 4

Input: s = "([])"
Output: true

### Constraints

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

### Big O

- Time: O(n) because each character of the string is potentially visited.
- Space: O(n) because of the stack used to store and compare brackets, which could consist of the entire string, i.e., all opening brackets.

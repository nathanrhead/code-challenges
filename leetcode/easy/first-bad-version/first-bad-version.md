# LeetCode Challenge #278: First Bad Version | Rating: Easy

## Task

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether a version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

## Example 1

Input: n = 5, bad = 4  
Output: 4

## Explanation

- call isBadVersion(3) -> false
- call isBadVersion(5) -> true
- call isBadVersion(4) -> true
- Then 4 is the first bad version.

## Example 2

Input: n = 1, bad = 1  
Output: 1

## Constraints

- 1 <= bad <= n <= 231 - 1

## Notes

- Studied and implemented the binary-search solution posted by "prateekchachra" on LeetCode.
- Learned about Math.rount(), a native JavaScript method on the Math class that returns the value of a number rounded to the nearest integer. (Before this, I'd always either used Math.ceil() or Math.floor().)
- Key points to remember:
  
  - when trying to find a value in a sorted list (array), use binary search;
  - When using binary search, set the left pointer at the start of the list, the right at the end, and the midpoint as the result of the equation (left + right) / 2, rounding to the nearest whole number.

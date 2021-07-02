# Udemy: Master the Code Interview, from Zero to Mastery: Data Structures & Algorithms | Return the First Value to Be Repeated in an Array | Rating: Easy

## Task

Given an array, return the first value to be repeated. Return undefined if there is no repeated value.

## Examples

- array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4]; // -> 2
- array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4]; // -> 1
- array3 = [1, 2, 3, 4, 5]; // undefined
- array4 = [1]; // undefined
- array5 = [2, 1, 3, 4, 5, 2, 1]; // -> 2
- array6 = [1, 2, 3, 4, 1]; // -> 1
- array7 = [4, 3, 4, 3, 2, 1, 2, 1]; // -> 4

## Big O

> Solution 1: hashtable using `new Map()`
  - Space: O(n)
  - Time: O(n)

> Solution 2: nested loop  
  - Space: O(n)
  - Time: O(n^2)

> Solution 3: hashtable using `const obj = {};`  
  - Space: O(n)
  - Time: O(n)

> Solution 4  
  - Space: O(1)
  - Time: O(n)

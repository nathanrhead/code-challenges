# The Junior Dev Struggle Bus Meetup | 10 May 2021 | Technical Interview Practice

## Problem Domain

Write a function that takes in a string and a charachter and returns the number of times that character occurs in the string.

Input: string, char
Output: integer = num of times char is in string

### Edge Cases

- [x] Account for the difference between upper and lowercase letters, treating them as the same character.
- [x] Account for an empty string and/or and empty char argument.
- [x] Account for a given string exactly matching a given char argument.
- [x] Account for the case of the given string not including the given char.

### Sample

> Sample string: 'The quick brown fox jumps over the lazy dog.'
> Sample char: 'r'
> Sample Output: 2

### Solutions

1. Use .split() and .filter, returning filteredArray.length.

- Big(O) time: two contiguous loops = O(n);
- Big(O) space: created one filtered copy of the array with n number of items = O(n);

2. Use .split() and .reduce, returning the accumulator.

- Big(O) time: two contiguous loops = O(n);
- Big(O) space: created nothing additional = 0;

3. Use a for-loop on the string itself, returning an incremented counter for each match.

- Big(O) time: one loop for n times = O(n);
- Big(O) space: created one counter variable = O(1);

4. Use a hashmap.

- Big(O) time: one while loop = O(n);
- Big(O) space: created one hashmap of known size = O(1);

## Preliminary Conclusion Pending a Better Understanding of Big(O)

It seems that solution 3 may be the cleanest bit of code, while remaining nearly as equally efficient as any other solution, including the hashmap, which requires the most amount of code.

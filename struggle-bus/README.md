# The Junior Dev Struggle Bus Meetup | 10 May 2021

## Technical Interview Practice

### Problem Domain
Write a function that takes in a string and a charachter and returns the number of times that character occurs in the string.

Hint: Write the function in such a way that it can count up any given character or return null for an excluded character.

Input: string, char
Output: integer = num of times char is in string

Edge Cases:

- Account for the difference between upper and lowercase letters.

### Sample

> string: 'The quick brown fox jumps over the lazy dog.'
> Sample char: 'r'
> Smaple Output: 2

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


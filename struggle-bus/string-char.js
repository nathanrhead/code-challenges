/*
Problem: function (string, char)
Return: the number of times char occurs in string.

Input: string, char
Output: integer = num of times char is in string
Constraints: avoid native JS methods (except .split())

Edge Cases:
- Account for the difference between upper and lowercase letters.

Visual:
  Sample string: 'The quick brown fox jumps over the lazy dog.'
  Sample char: 'r'
  Output: 2

  let array = string.split()
  loop over array
  if (array[i] === char) counter++

  Better: use hashtable to put like with like and then jump to the hashed char. Big(O) for time would be more efficient.
*/


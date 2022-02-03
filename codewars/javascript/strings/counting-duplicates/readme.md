# Codewars | Counting Duplicates in a String

## Author

Nathan Cox

## Task

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

## Examples

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

## To Run tests

`npm test` from the command line after installing dependencies (`npm i`);

## Big O

- Space: There's a map of n length = O(n);
- Time: Two loops, one that iterates n number of times and one that iterates m number of times = O(n + m);

## Takeaways

- Use a for-of loop or a forEach loop to iterate through a map.

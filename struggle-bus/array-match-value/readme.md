# Jr. Dev Struggle Bus: Cohort Challenge: Return the Values from an Array that Match those in Another

## Task

Return all values from the array "databaseRecords" that are in the array "keeywords".

## Notes

This is a challenge from a fellow member of Seattle JS Hackers and the Jr. Dev Struggle Bus.

There are four functions here representing solutions to different problems: returning values with strings that contain the keywords is one thing, while returning values that exactly match is another.

## Big O

- Solution 1: Returns all matches, including partial and repeated matches.

  > time: O(a + b) = linear  
  > space: O(a + b) = linear

- Solution 2: Returns an array of unique values only.

  > time: O(a + b + c) = linear  
  > space: O(a + b + c) = linear

- Solution 3: Returns only exact, not partial, matches, but uses a nested loop and relies on receiving a filtered array from one of the first two solutions.

  > time: O(a * b) = quadratic  
  > space: O(n) = linear

- Solution 4: Returns only exact, not partial, matches, using a hashtable and the filtered array from one of the first two solutions.

  > time: O(a + b) = linear  
  > space: O(n) = linear

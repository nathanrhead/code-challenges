'use strict';

/* Exercise 3: Everything

Analogous to the "some" method, arrays also have an "every" method. This one returns true when the given function returns true for every element in the array. In a way, "some" is a version of the || operator that acts on arrays, and "every" is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the "some" method.
*/

// My solution: loop (which turned out to be idential to the author's, boo yeah).
function everyMethodOne(array, predicate) {
  for (let val of array) {
    if (!predicate(val)) return false;
  };
  return true;
}

// The author's solution using .some()
function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}

module.exports = { everyMethodOne, every2 };

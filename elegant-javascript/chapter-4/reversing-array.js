'use strict';

/*
For this exercise, write two functions, reverseArray and reverseArrayInPlace. Neither function may use the built-in reverse method.
*/

// This solution takes an array as argument and produces a new array that has the same elements in the inverse order.
function reverseArray(array) {
  let reversed = [];
  // for (let i = array.length - 1; i >= 0; i--) reversed.
  for (let i = 0; i < array.length; i++) reversed.unshift(array[i]);
  return reversed;
};

// This solution does what the native JS reverse method does: it modifies the given array in place by reversing its elements. * This is the author's method and it swaps the first and the last, then the second and the penultimate, etc.
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = temp;
  };
  return array;
};

module.exports = { reverseArray, reverseArrayInPlace };

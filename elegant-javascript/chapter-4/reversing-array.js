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

// This solution does what the native JS reverse method does: it modifies the given array in place by reversing its elements.
function reverseArrayInPlace(array) {
  let temp;
  for (let i = 0; i < array.length; i++) {
    temp = array[i];
    array[i] = array[i+1];
    array[i+1] = temp;
  };
  console.log({array});
  return array;
};

module.exports = { reverseArray, reverseArrayInPlace };

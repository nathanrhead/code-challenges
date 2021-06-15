'use strict';

// Exercise 1: Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

const arrays = [[1, 2, 3], [4, 5], [6]]; // → [1, 2, 3, 4, 5, 6]

// My solution.
const flattenMethodOne = array => array.reduce((acc, val) => {
  return acc.concat(val);
});

// Using JS method .flat().
const flattenMethodTwo = array => arrays.flat();

// The author's solution
const flattenMethodThree = array => array.reduce((flat, current) => flat.concat(current), []);

module.exports = { flattenMethodOne, flattenMethodTwo, flattenMethodThree };

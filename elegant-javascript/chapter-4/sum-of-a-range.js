'use strict';

// Exercises: Chapter 4 of Elegant Javascript: Objects and Arrays

// Exercise 1a: Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start through end.

function range(start, end, step = start < end ? 1 : -1) {
  if (start === end) return [start];

  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    };
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  };
  return array;
}

// Exercise 1b: Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

function sum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  };
  return sum;
}

// Exercise 1c: As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces[5, 4, 3, 2].

module.exports = { range, sum };

'use strict';

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.  

// This is the author's solution. The list will look as follows: { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { 
      value: array[i],
      rest: list 
    };
  };
  return list;
}

// Also write a listToArray function that produces an array from a list.

// My solution.
function listToArray1(list) {
  let array = [];
  let current = list;
  while (current) {
    array.push(current.value);
    current = current.rest;
  };
  return array;
}

// Author's solution
function listToArray2(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

// Then, add a helper function "prepend" that takes an element and a list and creates a new list that adds the element to the front of the input list.

function prepend(value, list) {
  return { value, rest: list };
}

// Then, add another helper, called "nth," which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element. If you haven’t already, also write a recursive version of nth.

// My solution.
function nth(list, num) {
  let value = listToArray1(list)[num];
  return value ? value : undefined;
}

// Author's solution: recursive.
function authorNth(list, n) {
  if (!list) return undefined;
  else if (n === 0) return list.value;
  else return authorNth(list.rest, n - 1);
}

module.exports = { arrayToList, listToArray1, listToArray2, prepend, nth, authorNth };

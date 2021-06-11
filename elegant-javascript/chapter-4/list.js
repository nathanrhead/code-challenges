'use strict';

/* 
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.  
*/

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

function listToArray(list) {

}

// Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, 

function prepend(val, list) {

}

// Write another helper function called nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

function nth(list, num) {

}

// If you haven’t already, also write a recursive version of nth.
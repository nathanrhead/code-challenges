'use strict';

// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

// This is the author's solution.
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return false;

  let aKeys = Object.keys(a), bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) return false;

  for (let key of aKeys) {
    if (!bKeys.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;  
}

module.exports = deepEqual;

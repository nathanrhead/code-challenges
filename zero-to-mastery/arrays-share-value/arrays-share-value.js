'use strict';

// Solution 1: Brute-force approach: O(a * b); space = O(1).
function bruteForce(arr1, arr2) {
  if(!arr1 || !arr2) return false;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr1[i]) return true;
    };
  };
  return false;
}

// Solution 2: Hashtable approach: O(a + b) = O(n); space = O(a).
function hashtableMethod1(arr1, arr2) {
  if(!arr1 || !arr2) return false;
  let map = new Map();
  for (let i = 0; i < arr1.length; i++) {
    if(!map.has(arr1[i])) map.set(arr1[i], i);
  };
  for (let i = 0; i < arr2.length; i++) {
    if (map.has(arr2[i])) return true;
  };
  return false;
}

// Solution 3: You can also just create an empty object and fill it up.
function hashtableMethod2(arr1, arr2) {
  if(!arr1 || !arr2) return false;
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    };
  };
  for (let i = 0; i < arr2.length; i++) {
    if (map[arr2[i]]) return true;
  };
  return false;
}

// Or use a built-in JS method, like .some() which tests whether at least one element in the array passes the condition and returns true if it does.
function builtInMethod(arr1, arr2) {
  if(!arr1 || !arr2) return false;
  return arr2.some(val => arr1.includes(val));
}

module.exports = { bruteForce, hashtableMethod1, hashtableMethod2, builtInMethod }
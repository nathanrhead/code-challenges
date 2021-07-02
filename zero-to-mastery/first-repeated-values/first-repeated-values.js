'use strict';

// The fast way with a hashmap: space = O(n); time = O(n);
function repeatedNum1(arr) {
  if (!arr || arr.length <= 1) return undefined;
  let hashmap = new Map();
  for (let num of arr) {
    if(hashmap.has(num)) return num;
    else hashmap.set(num, num);
  }
  return undefined;
}

// slow solution--using nested loops to show, in contrast, how fast a hashmap can be: space = O(1); time O(n^2);
function repeatedNum2(arr) {
  if (!arr || arr.length <= 1) return undefined;

  let indexArray = [];

  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1 ; j <= arr.length - 1; j++) {
      if (arr[i] === arr[j]) 
        indexArray.push([i, j]);
    }
  }
  if (indexArray.length === 1) return arr[indexArray[0][0]];
  else if (indexArray.length < 1) return undefined;
  else {
    let min = indexArray[0][1] - indexArray[0][0];
    let answerIndices = indexArray.reduce((acc, val, idx) => {
      let diff = val[1] - val[0];
      if (diff < min) {
        min = diff;
        return acc = val;
      } else { 
        return acc;
      }
    });
    return arr[answerIndices[0]];
  }
  return undefined;
}

// And this is ZtoM's implementation of a hashmap
function repeatedNum3(arr) {
  if (!arr || arr.length <= 1) return undefined;
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) return arr[i];
    else map[arr[i]] = true;
  }
  return undefined;
}

// From stack overflow: doesn't work for array2, because it just returns the first element that generally repeats without regard for how quickly it repeats or whether it's the first one to repeat.
function repeatedNum4(arr) {
  if (!arr || arr.length <= 1) return undefined;
  return arr.find((k,i) => arr.lastIndexOf(k) !== i);
}

module.exports = { repeatedNum1, repeatedNum2, repeatedNum3, repeatedNum4 }

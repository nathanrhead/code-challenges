'use strict';

function mergeSortedArrays(arrOne, arrTwo) {
  // Error checking
  if (!arrOne || !arrTwo || !Array.isArray(arrOne) || !Array.isArray(arrTwo))
    return 'There is nothing to merge.';
  
  // Checking for one empty array and returning the second.
  if (arrOne.length < 1) return arrTwo;
  else if (arrTwo.length < 1) return arrOne;

  // Variables
  const result = [];
  let i = 0, j = 0;

  // Loop and logic
  while (i + j < arrOne.length + arrTwo.length) {
    if (arrTwo[j] < arrOne[i] || arrOne[i] === undefined) {
      result.push(arrTwo[j]);
      j++;
    } else {
      result.push(arrOne[i]);
      i++
    };
  };
  return result;
}

module.exports = mergeSortedArrays;

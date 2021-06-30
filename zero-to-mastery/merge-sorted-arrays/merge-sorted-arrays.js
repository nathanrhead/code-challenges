'use strict';

function mergeSortedArrays(arrOne, arrTwo) {
  if (!arrOne || !arrTwo || arrOne.length < 1 || arrTwo.length < 1 || !Array.isArray(arrOne) || !Array.isArray(arrTwo)) return 'There is nothing to merge.';

  let result = [];
  let i = 0, j = 0;
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

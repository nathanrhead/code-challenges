'use strict';

const mergeSortedArrays = require('./merge-sorted-arrays')

describe ('the challenge to merge two sorted arrays into one sorted array', () => {

  const arrayOne = [0, 3, 4, 31];
  const arrayTwo = [4, 6, 30];
  const arrayThree = [4, 6, 30];
  const arrayFour = [0, 3, 4, 31];
  const arrayFive = [4, 6, 30];
  const arraySix = [0, 3, 4, 31, 42, 51, 85, 98];
  const arraySeven = [0, 3, 4, 31, 42, 51, 85, 98];
  const arrayEight = [4, 6, 30];
  const arrayNine = [];

  it ('returns the expected sorted array', () => {
    expect(mergeSortedArrays(arrayOne, arrayTwo)).toEqual([ 0, 3, 4, 4, 6, 30, 31 ]);
    expect(mergeSortedArrays(arrayThree, arrayFour)).toEqual([ 0, 3, 4, 4, 6, 30, 31 ]);
    expect(mergeSortedArrays(arrayFive, arraySix)).toEqual([ 0, 3, 4, 4, 6, 30, 31, 42, 51, 85, 98 ]);
    expect(mergeSortedArrays(arraySeven, arrayEight)).toEqual([ 0, 3, 4, 4, 6, 30, 31, 42, 51, 85, 98 ]);
  });

  it ('returns an error when one or both of the two arrays is missing or empty', () => {
    expect(mergeSortedArrays(arraySeven)).toEqual('There is nothing to merge.');
    expect(mergeSortedArrays(arraySeven, arrayNine)).toEqual('There is nothing to merge.');
  });
})

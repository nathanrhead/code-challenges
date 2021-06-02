'use strict';

const { sum } = require('./sum-of-a-range');
const { range } = require('./sum-of-a-range');

describe ('exercise 1a: create a range of numbers', () => {

  it ('creates an array of whole numbers between two given integers in ascending order', () => {
    expect(range(1, 10)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });

  it ('creates an array of whole numbers between two given integers in descending order', () => {
    expect(range(5, 2)).toEqual([5, 4, 3, 2]);
  });

  it ('returns [start] if start === end', () => {
    expect(range(4, 4)).toEqual([4]);
  });

  it ('returns an array of whole numbers incremented by the amount of a third parameter', () => {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
    expect(range(10, 0, -2)).toEqual([10, 8, 6, 4, 2, 0]);
  });
})

describe ('exercise 1b: sum a range of numbers', () => {

  it ('returns the sume of a range of numbers', () => {
    expect(sum(range(1, 10))).toEqual(55);
  });

})

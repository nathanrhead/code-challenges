'use strict';

const { sum } = require('./sum-of-a-range');
const { range } = require('./sum-of-a-range');

describe ('exercise 1: sum of a range', () => {

  it ('creates an array of whole numbers between two given integers in ascending order', () => {
    expect(range(1, 10)).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });

  it ('creates an array of whole numbers between two given integers in descending order', () => {
    expect(range(5, 2)).toEqual([5, 4, 3, 2]);
  });

  it ('returns the sume of a range of numbers created by the range and sum functions', () => {
    expect(sum(range(1, 10))).toEqual(55);
  });
})

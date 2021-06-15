'use strict';

const Flatten = require('./flatten');

describe ('chapter 5 exercises from Eloquent JavaScript', () => {
  const arrays = [[1, 2, 3], [4, 5], [6]]; // → [1, 2, 3, 4, 5, 6]

  it ('combines all elements of embedded arrays into one array', () => {
    expect(Flatten.flattenMethodOne(arrays)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(Flatten.flattenMethodTwo(arrays)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(Flatten.flattenMethodThree(arrays)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  
})
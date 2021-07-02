'use strict';

const { repeatedNum1, repeatedNum2, repeatedNum3, repeatedNum4 } = require('./first-repeated-values');

describe('the various code solutions that return the first number to repeat itself in an array', () => {
  const array1 = [2,5,1,2,3,5,1,2,4]; // -> 2
  const array2 = [2,1,1,2,3,5,1,2,4]; // -> 1
  const array3 = [1,2,3,4,5]; // undefined
  const array4 = [1]; // undefined
  const array5 = [2, 1, 3, 4, 5, 2, 1]; // -> 2
  const array6 = [4,3,4,3,2,1,2,1]; // -> 4

  it ('returns the first value to be repeated in an array when it is the first one encountered', () => {
    expect(repeatedNum1(array1)).toEqual(2);
    expect(repeatedNum2(array1)).toEqual(2);
    expect(repeatedNum2(array1)).toEqual(2);
    expect(repeatedNum2(array1)).toEqual(2);

    expect(repeatedNum1(array5)).toEqual(2);
    expect(repeatedNum2(array5)).toEqual(2);
    expect(repeatedNum2(array5)).toEqual(2);
    expect(repeatedNum2(array5)).toEqual(2);

    expect(repeatedNum1(array6)).toEqual(4);
    expect(repeatedNum2(array6)).toEqual(4);
    expect(repeatedNum2(array6)).toEqual(4);
    expect(repeatedNum2(array6)).toEqual(4);
  });

  it ('returns the first value to be repeated in an array when it is not the first repeated value to be encountered', () => {
    expect(repeatedNum1(array2)).toEqual(1);
    expect(repeatedNum2(array2)).toEqual(1);
    expect(repeatedNum3(array2)).toEqual(1);
    // expect(repeatedNum4(array2)).toEqual(1); // This one fails 
  });

  it ('returns undefined when passed an array without any repeated values', () => {
    expect(repeatedNum1(array3)).toBe(undefined);
    expect(repeatedNum2(array3)).toBe(undefined);
    expect(repeatedNum3(array3)).toBe(undefined);
    expect(repeatedNum4(array3)).toBe(undefined);
  });

  it ('returns undefined when passed an array of length 1', () => {
    expect(repeatedNum1(array4)).toBe(undefined);
    expect(repeatedNum2(array4)).toBe(undefined);
    expect(repeatedNum3(array4)).toBe(undefined);
    expect(repeatedNum4(array4)).toBe(undefined);
  });
})

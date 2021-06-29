'use strict';

const { bruteForce, hashtableMethod1, hashtableMethod2, builtInMethod } = require('./arrays-share-value');

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
const array3 = ['z', 'y', 'x'];
const array4 = ['a', 'a', 'a', 'a'];

describe('zero-to-mastery code challenge to determine whether two arrays share any values', () => {

  it ('returns false for two arrays that share no values', () => {
    expect(bruteForce(array1, array2)).toBe(false);
    expect(hashtableMethod1(array1, array2)).toBe(false);
    expect(hashtableMethod2(array1, array2)).toBe(false);
    expect(builtInMethod(array1, array2)).toBe(false);
  });

  it ('returns true when the given two arrays have a shared value', () => {
    expect(bruteForce(array1, array3)).toBe(true);
    expect(hashtableMethod1(array1, array3)).toBe(true);
    expect(hashtableMethod2(array1, array3)).toBe(true);
    expect(builtInMethod(array1, array3)).toBe(true);
  });

  it ('returns true when the first items in both arrays are the same', () => {
    expect(bruteForce(array1, array4)).toBe(true);
    expect(hashtableMethod1(array1, array4)).toBe(true);
    expect(hashtableMethod2(array1, array4)).toBe(true);
    expect(builtInMethod(array1, array4)).toBe(true);
  });

  it ('returns false when passed only one array', () => {
    expect(bruteForce(array1)).toBe(false);
    expect(hashtableMethod1(array1)).toBe(false);
    expect(hashtableMethod2(array1)).toBe(false);
    expect(builtInMethod(array1)).toBe(false);
  });
})

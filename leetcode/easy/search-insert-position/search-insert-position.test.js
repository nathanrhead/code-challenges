'use strict';

const searchInsert = require('./search-insert-position');

describe('the function to return the index of a value or the index where the value would be if absent in an array sorted in ascending order', () => {
  // Test arrays.
  const array1 = [1,3,5,6];
  const array2 = [1];
  const array3 = [1,3,5];
  const array4 = [];
  const array5 = Array(1);

  // Test targets.
  const target1 = 5; // -> 2
  const target2 = 2; // -> 1
  const target3 = 7; // -> 4
  const target4 = 0; // -> 0 for both arrays
  const target5 = 1; // -> 0;
  const target6 = 4; // -> 2

  it ('returns the index of a value in a sorted array', () => {
    expect(searchInsert(array1, target1)).toEqual(2);
    expect(searchInsert(array2, target5)).toEqual(0);
  });

  it ('returns the index of where a value not in an array would slot in ascending order', () => {
    expect(searchInsert(array1, target2)).toEqual(1);
    expect(searchInsert(array1, target3)).toEqual(4);
    expect(searchInsert(array1, target4)).toEqual(0);
    expect(searchInsert(array2, target4)).toEqual(0);
    expect(searchInsert(array3, target6)).toEqual(2);
  });

  it ('adds the target at the zero index when the array is either empty or has a length of one but no value at the zero index', () => {
    expect(searchInsert(array4, target4)).toEqual(0);
    expect(searchInsert(array5, target6)).toEqual(0);
  });

  it ('returns an error when there is no array and or no target', () => {
    expect(searchInsert()).toEqual('There is either no array, no target, or both.');
    expect(searchInsert(array4)).toEqual('There is either no array, no target, or both.');
    expect(searchInsert(target6)).toEqual('There is either no array, no target, or both.');

  });
});

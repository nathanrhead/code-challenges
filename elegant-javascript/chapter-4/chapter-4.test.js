'use strict';

const { sum } = require('./sum-of-a-range');
const { range } = require('./sum-of-a-range');
const Reversed = require('./reversing-array');
const List = require('./list');
const deepEqual = require('./deep-equal');

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

describe ('exercise 2: reversing an array', () => {
  const array = [1,2,3,4,5,6,7,8,9];
  it ('takes an array and returns a new array with the value of the argument in reverse order', () => {
    expect(Reversed.reverseArray(array)).toEqual([9,8,7,6,5,4,3,2,1]);
  });

  it ('takes an array and reverses it in place', () => {
    const array1 = [1,2,3,4,5,6,7,8,9];

    expect(Reversed.reverseArrayInPlace(array1)).toEqual([9,8,7,6,5,4,3,2,1]);
  });

  describe ('exercise 3: lists', () => {
    const array = [1,2,3];
    const list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
    const listPrepended = {value: 4, rest: { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } } };


    it ('creates a linked list from the values in an array', () => {
      expect(List.arrayToList(array)).toEqual(list);
    });

    it ('turns the values of a linked list into an array of values', () => {
      expect(List.listToArray1(list)).toEqual(array);
      expect(List.listToArray2(list)).toEqual(array);
    });

    it ('prepends a given value to the head of the list', () => {
      expect(List.prepend(4, list)).toEqual(listPrepended);
    });

    it ('returns the value of the nth element in a list', () => {
      expect(List.nth(list, 2)).toEqual(3);
      expect(List.authorNth(list, 2)).toEqual(3);
    });
  });

  describe ('exercise 4: deep equality', () => {
    const obj = {here: {is: 'an'}, object: 2};

    it ('returns true when passed objects with equal values', () => {
      expect(deepEqual(obj, obj)).toBe(true);
      expect(deepEqual(obj, {here: {is: 'an'}, object: 2})).toBe(true);
    });

    it ('returns false when passed objects with different values', () => {
      expect(deepEqual(obj, {here: 1, object: 2})).toBe(false);
    });
  });
})

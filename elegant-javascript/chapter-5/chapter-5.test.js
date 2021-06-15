'use strict';

const Flatten = require('./flatten');
const loop = require('./your-own-loop');
const Every = require('./everything');

describe ('chapter 5 exercises from Eloquent JavaScript', () => {
  const arrays = [[1, 2, 3], [4, 5], [6]]; // → [1, 2, 3, 4, 5, 6]

  it ('is the solution to exercise 1 and combines all elements of embedded arrays into one array', () => {
    expect(Flatten.flattenMethodOne(arrays)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(Flatten.flattenMethodTwo(arrays)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(Flatten.flattenMethodThree(arrays)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it ('is the author\'s solution to exercise 2 and is a function that loops through an iterable object (i.e., an array)', () => {
    const value = 3;
    const test = n => n > 0;
    const update = n => n - 1;
    const answer = [];
    const body = value => answer.unshift(value);
    loop(value, test, update, body);
    expect(answer).toEqual([1, 2, 3]);
  });

  it ('is the solution to exercise 3 and returns true if all elements in a given array meet the criteria of the predicate function', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const predicate = n => n < 10;
    expect(Every.everyMethodOne(array, predicate)).toEqual(true);
    expect(Every.every2(array, predicate)).toEqual(true);
  });

  it ('is the solution to exercise 3 and returns false if any of the elements in a given array fail to meet the criteria of the predicate function', () => {
    const array = [1, 2, 3, 12, 5, 6];
    const predicate = n => n < 10;
    expect(Every.everyMethodOne(array, predicate)).toEqual(false);
    expect(Every.every2(array, predicate)).toEqual(false);
  });
})

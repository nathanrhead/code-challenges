'use strict';

const Functions = require('./functions');

describe ('exercises on functions from chapter three of Eloquent JavaScript', () => {
  it ('is exercise one and it takes two integers and returns the smaller of the two', () => {
    expect (Functions.min(0, 10)).toEqual(0);
    expect (Functions.min(0, -10)).toEqual(-10);
  });

  it ('is exercise two and it accepts a positive whole number and returns true if even and false if not', () => {
    expect (Functions.isEven(50)).toBe(true);
    expect (Functions.isEven(75)).toBe(false);
    expect (Functions.isEven(-1)).toBe(false);
  });

  it ('is exercise 3a and it takes a string and returns a number that indicates how many uppercase \'B\'s there are in it', () => {
    expect (Functions.countBs('BBC')).toEqual(2);
  });

  it ('is exercise 3b and it takes a string and a character to be counted within the string and returns a number indicating how many times that character appears in the string', () => {
    expect(Functions.countChar('kakkerlak', 'k'))
  });
})


'use strict';

const myAtoi = require('./atoi.js');

describe('myAtoi', () => {
  it ('should return 42', () => {
    expect(myAtoi('42')).toEqual(42);
  });

  it ('should return -42', () => {
    expect(myAtoi('-042')).toEqual(-42);
  });

  it ('should return 4193', () => {
    expect(myAtoi('4193 with words')).toEqual(4193);
  });

  it ('should return 1337', () => {
    expect(myAtoi('1337c0d3')).toEqual(1337);
  });

  it ('should return 0', () => {
    expect(myAtoi('0-1')).toEqual(0);
  });

  it ('should return 0', () => {
    expect(myAtoi('words and 987')).toEqual(0);
  });

  it ('should return -2147483648', () => {
    expect(myAtoi('-91283472332')).toEqual(-2147483648);
  });

  it ('should return 1', () => {
    expect(myAtoi('+1')).toEqual(1);
  });

  it ('should return 2147483647', () => {
    expect(myAtoi('21474836460')).toEqual(2147483647);
  });

  it ('should return 0', () => {
    expect(myAtoi('+-24')).toEqual(0);
  });
});

'use strict';

const countChar1 = require('./string-char');
const countChar2 = require('./string-char');
const countChar3 = require('./string-char');
const countChar4 = require('./string-char');

const string1 = 'The quick brown fox jumped over the lazy dog.';
const string2 = '';
const string3 = 'THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG';
const string4 = 'No luck.';
const string5 = 'R';
const string6 = 'ssssssssssssrssssssssssssss';

describe ('count character function', () => {
  it ('returns 0 when passed an empty string', () => {
    expect(countChar1.countChar1(string2, 'r')).toEqual(0);
  });

  it ('returns 0 when passed an empty character', () => {
    expect(countChar1.countChar1(string1)).toEqual(0);
  });

  it ('returns an integer indicating the count of the given character in the string', () => {
    expect(countChar1.countChar1(string1, 'r')).toEqual(2);
  });

  it ('returns an integer indicating the count of the given character in the string, regardless of the case of the letters', () => {
    expect(countChar1.countChar1(string3, 'r')).toEqual(2);
  });

  it ('returns 1 if the string is equal to the given character', () => {
    expect(countChar1.countChar1(string5, 'r')).toEqual(1);
  });

  it ('returns {count: 1} if there is only one instance of the character in the string without entering the while loop', () => {
    expect(countChar1.countChar1(string6, 'r')).toEqual({count: 1});
  });

  it ('returns 0 when the string does not contain the character', () => {
    expect(countChar1.countChar1(string4, 'r')).toEqual(0);
  });
})

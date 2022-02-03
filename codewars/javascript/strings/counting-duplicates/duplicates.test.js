'use strict';

const { duplicateCount1, duplicateCount2 } = require('./duplicate-chars.js');

describe ('it checks for duplicated characters in a string', () => {
  it ('returns the number of duplicates in a string', () => {
    expect(duplicateCount1('')).toEqual(0);
    expect(duplicateCount1('abcde')).toEqual(0);
    expect(duplicateCount1('aabbcde')).toEqual(2);
    expect(duplicateCount1('aabBcde')).toEqual(2);
    expect(duplicateCount1('Indivisibility')).toEqual(1);
    expect(duplicateCount1('Indivisibilities')).toEqual(2);
    expect(duplicateCount1('Ind8ivisibi3lit5ies')).toEqual(2);
  });

  it ('returns the number of duplicates in a string', () => {
    expect(duplicateCount2('')).toEqual(0);
    expect(duplicateCount2('abcde')).toEqual(0);
    expect(duplicateCount2('aabbcde')).toEqual(2);
    expect(duplicateCount2('aabBcde')).toEqual(2);
    expect(duplicateCount2('Indivisibility')).toEqual(1);
    expect(duplicateCount2('Indivisibilities')).toEqual(2);
    expect(duplicateCount2('Ind8ivisibi3lit5ies')).toEqual(2);
  });

});
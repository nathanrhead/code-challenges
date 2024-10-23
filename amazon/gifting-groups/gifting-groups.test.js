'use strict';

const { countGroupsBfs, countGroupsDfs } = require('./gifting-groups');

describe ('leetcode challenge to deteremine number of distinct groups (connections) in a matrix', () => {
  it ('returns the number of distinct groups', () => {
    expect(countGroupsDfs(['110', '110', '001'])).toEqual(2);
    expect(countGroupsDfs(['1100', '1110', '0110', '0001'])).toEqual(2);
    expect(countGroupsDfs(['10000', '01000', '00100', '00010', '00001'])).toEqual(5);

    expect(countGroupsBfs(['110', '110', '001'])).toEqual(2);
    expect(countGroupsBfs(['1100', '1110', '0110', '0001'])).toEqual(2);
    expect(countGroupsBfs(['10000', '01000', '00100', '00010', '00001'])).toEqual(5);
  });
});

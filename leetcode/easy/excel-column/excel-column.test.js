'use strict';

const column = require('./excel-column');

describe('leetcode challenge to return the label of a given excel column', () => {

  it ('returns the expected label of an excel spreadsheet, given an interger', () => {
    expect(column(1)).toEqual('A');
    expect(column(2)).toEqual('B');
    expect(column(3)).toEqual('C');
    expect(column(4)).toEqual('D');
    expect(column(26)).toEqual('Z');
    expect(column(28)).toEqual('AB');
    expect(column(701)).toEqual('ZY');
    expect(column(2147483647)).toEqual('FXSHRXW');
  });
})

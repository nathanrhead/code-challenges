'use strict';

const exist = require('./word-search');

describe('exist', () => {
  test('it should return true if the word exists in the board', () => {
    expect(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")).toBeTruthy();
  });
});
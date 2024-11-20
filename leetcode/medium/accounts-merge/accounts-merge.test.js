/* eslint-env jest */
'use strict';

const { expect, test, describe } = require('@jest/globals');
const accountsMerge = require('./accounts-merge');

describe('accountsMerge', () => {
  test('merges accounts with common emails', () => {
    const accounts = [
      ["John", "johnsmith@mail.com", "john00@mail.com"],
      ["John", "johnnybravo@mail.com"],
      ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
      ["Mary", "mary@mail.com"]
    ];
    const expected = [
      ["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"],
      ["John", "johnnybravo@mail.com"],
      ["Mary", "mary@mail.com"]
    ];
    const result = accountsMerge(accounts);
    
    expected.forEach(exp => {
      expect(result).toEqual(expect.arrayContaining([exp]));
    });
  });

  test('merges accounts with multiple common emails', () => {
    const accounts = [
      ["Alex", "alex@mail.com", "alex01@mail.com"],
      ["Alex", "alex01@mail.com", "alex02@mail.com"],
      ["Alex", "alex02@mail.com", "alex03@mail.com"],
      ["Bob", "bob@mail.com"]
    ];
    const expected = [
      ["Alex", "alex01@mail.com", "alex02@mail.com", "alex03@mail.com", "alex@mail.com"],
      ["Bob", "bob@mail.com"]
    ];
    const result = accountsMerge(accounts);
    expected.forEach(exp => {
      expect(result).toEqual(expect.arrayContaining([exp]));
    });
  });

  test('handles accounts with no common emails', () => {
    const accounts = [
      ["Alice", "alice@mail.com"],
      ["Bob", "bob@mail.com"],
      ["Charlie", "charlie@mail.com"]
    ];
    const expected = [
      ["Alice", "alice@mail.com"],
      ["Bob", "bob@mail.com"],
      ["Charlie", "charlie@mail.com"]
    ];
    const result = accountsMerge(accounts);
    expected.forEach(exp => {
      expect(result).toEqual(expect.arrayContaining([exp]));
    });
  });

  test('handles empty accounts list', () => {
    const accounts = [];
    const expected = [];
    const result = accountsMerge(accounts);
    expect(result).toEqual(expected);
  });
});

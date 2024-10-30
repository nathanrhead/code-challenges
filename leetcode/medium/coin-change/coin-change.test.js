'use strict';

const { coinChangeDP, coinChangeBFS } = require('./coin-change');

describe ('LeetCode challenge to return the fewest number of coins required to reach a target sum', () => {
  it ('returns the smallest number of coins', () => {
    expect(coinChangeDP([1,2,5], 11)).toEqual(3);
    expect(coinChangeDP([2],3)).toEqual(-1);
    expect(coinChangeDP([1],0)).toEqual(0);

    expect(coinChangeBFS([1,2,5], 11)).toEqual(3);
    expect(coinChangeBFS([2], 3)).toEqual(-1);
    expect(coinChangeBFS([1],0)).toEqual(0);
  });
});
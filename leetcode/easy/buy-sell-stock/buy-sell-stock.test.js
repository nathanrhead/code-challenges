'use strict';

const solution = require('./buy-sell-stock');

describe ('leetcode challenge to maximize profit from stock', () => {
  it ('returns the maximum profit available', () => {
    const test1 = [7,1,5,3,6,4]; // -> 6-1=5
    const test2 = [1,2]; // -> 2-1=1
    const test3 = [1,4,2]; // -> 4-1=3
    const test4 = [2,1,2,1,0,1,2]; // 2-0=2
    expect(solution(test1)).toEqual(5);
    expect(solution(test2)).toEqual(1);
    expect(solution(test3)).toEqual(3);
    expect(solution(test4)).toEqual(2);
  });

  it ('returns 0 when there is no profit, i.e., the numbers are sorted in descending order', () => {
    const test1 = [7,6,4,3,1]; // -> 0
    expect(solution(test1)).toEqual(0);
  });
});

'use strict';

const { climbStairs, climbStairsRecursively, climbStairsMemoized } = require('./climbing-stairs');

describe ('leetcode challenge to determine how many methods n number of stairs may be climbed when they may be taken one or two at a time', () => {
  it ('returns the number of methods n number of stairs may be climbed', () => {
    expect(climbStairs(3)).toEqual(3);
    expect(climbStairs(4)).toEqual(5);
    expect(climbStairs(5)).toEqual(8);

    expect(climbStairsRecursively(3)).toEqual(3);
    expect(climbStairsRecursively(4)).toEqual(5);
    expect(climbStairsRecursively(5)).toEqual(8);    

    expect(climbStairsMemoized(3)).toEqual(3);
    expect(climbStairsMemoized(4)).toEqual(5);
    expect(climbStairsMemoized(5)).toEqual(8);    
  });
});
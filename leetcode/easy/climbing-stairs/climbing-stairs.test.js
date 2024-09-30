'use strict';

const solution = require('./climbing-stairs');

describe ('leetcode challenge to determine how many methods n number of stairs may be climbed when they may be taken one or two at a time', () => {
  it ('returns the number of methods n number of stairs may be climbed', () => {
    expect(solution(3)).toEqual(3);
    expect(solution(4)).toEqual(5);
    expect(solution(5)).toEqual(8);
  });
});
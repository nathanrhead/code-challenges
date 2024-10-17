'use strict';

const solution = require('./substring-no-repeat');

describe ('leetcode challenge to find a string\'s longest substring that doesn\'t have repeated characters', () => {
  it ('returns the length of the longest substring without repeated characters', () => {
    expect(solution("abcabcbb")).toEqual(3);
    expect(solution("bbbbb")).toEqual(1);
    expect(solution("pwwkew")).toEqual(3);
    expect(solution("")).toEqual(0);
    expect(solution(" ")).toEqual(1);
    expect(solution("dvdf")).toEqual(3);
  });
});

'use strict';

const solution = require('./is-anagram');

describe ('leetcode challenge to determine whether two strings are anagrams of eachother', () => {
  it ('returns true when a string "s" is an anagram of string "t"', () => {
    const s1 = 'anagram'; 
    const t1 = 'nagaram';
    const s2 = 'a';
    const t2 = 'a';
    expect(solution(s1, t1)).toBeTruthy();
    expect(solution(s2, t2)).toBeTruthy();
  });

  it ('returns false when the two strings passed are not anagrams of eachother', () => {
    const s1 = 'rat';
    const t1 = 'car';
    const s2 = 'a';
    const t2 = 'b';
    expect(solution(s1, t1)).toBeFalsy();
    expect(solution(s2, t2)).toBeFalsy();
  });
});

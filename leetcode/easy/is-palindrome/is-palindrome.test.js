'use strict';

const solution = require('./is-palindrome');

describe ('leetcode challenge to determine whether a string is a palindrome', () => {
  it ('returns true when a string is a palindrome', () => {
    const test1 = 'A man, a plan, a canal: Panama'; 
    const test2 = ' ';
    const test3 = 'racecar';
    const test4 = 'abba';
    const test5 = 'natan';
    expect(solution(test1)).toBeTruthy();
    expect(solution(test2)).toBeTruthy();
    expect(solution(test3)).toBeTruthy();
    expect(solution(test4)).toBeTruthy();
    expect(solution(test5)).toBeTruthy();
  });

  it ('returns false when a string is not a palindrome', () => {
    const test1 = 'race a car';
    const test2 = 'ab';
    expect(solution(test1)).toBeFalsy();
    expect(solution(test2)).toBeFalsy();
  });
});

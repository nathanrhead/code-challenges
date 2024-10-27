'use strict';

const { isPalindrome, isPalindromeJSMethods } = require('./is-palindrome');

describe ('leetcode challenge to determine whether a string is a palindrome', () => {
  it ('returns true when a string is a palindrome', () => {
    const test1 = 'A man, a plan, a canal: Panama'; 
    const test2 = ' ';
    const test3 = 'racecar';
    const test4 = 'abba';
    const test5 = 'natan';
    expect(isPalindrome(test1)).toBeTruthy();
    expect(isPalindrome(test2)).toBeTruthy();
    expect(isPalindrome(test3)).toBeTruthy();
    expect(isPalindrome(test4)).toBeTruthy();
    expect(isPalindrome(test5)).toBeTruthy();

    expect(isPalindromeJSMethods(test1)).toBeTruthy();
    expect(isPalindromeJSMethods(test2)).toBeTruthy();
    expect(isPalindromeJSMethods(test3)).toBeTruthy();
    expect(isPalindromeJSMethods(test4)).toBeTruthy();
    expect(isPalindromeJSMethods(test5)).toBeTruthy();
  });

  it ('returns false when a string is not a palindrome', () => {
    const test1 = 'race a car';
    const test2 = 'ab';
    expect(isPalindrome(test1)).toBeFalsy();
    expect(isPalindrome(test2)).toBeFalsy();

    expect(isPalindromeJSMethods(test1)).toBeFalsy();
    expect(isPalindromeJSMethods(test2)).toBeFalsy();
  });
});

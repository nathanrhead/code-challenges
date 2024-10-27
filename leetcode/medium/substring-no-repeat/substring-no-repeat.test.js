'use strict';

const { lengthOfLongestSubstring } = require('./substring-no-repeat');

describe ('leetcode challenge to find a string\'s longest substring that doesn\'t have repeated characters', () => {
  it ('returns the length of the longest substring without repeated characters', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
    expect(lengthOfLongestSubstring("")).toEqual(0);
    expect(lengthOfLongestSubstring(" ")).toEqual(1);
    expect(lengthOfLongestSubstring("dvdf")).toEqual(3);
  });
});

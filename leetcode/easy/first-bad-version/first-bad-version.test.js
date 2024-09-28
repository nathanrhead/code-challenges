'use strict';

const solution = require('./first-bad-version');

const isBadVersion = (version, firstBadVersion) =>  version >= firstBadVersion ? true : false;

describe ('leetcode challenge to determine the first bad version of a products\'s release', () => {
  it ('calls and API and returns the first bad version', () => {
    expect(solution(isBadVersion, 5, 4)).toEqual(4);
    expect(solution(isBadVersion, 1, 1)).toEqual(1);
  });
});
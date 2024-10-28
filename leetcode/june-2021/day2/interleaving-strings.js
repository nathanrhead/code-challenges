'use strict';

function isInterleave(s1, s2, s3, i=0, j=0, k=0) {
  // The length of s3 must equal the sum of the lengths of s1 and s2 in order for the function to be true.
  if (s1.length + s2.length !== s3.length) return false;

  // If we've reached the end of s1, there's no need to iterate through the remainder of s2, but rather only to check whether it matches the remainder of s3.
  if (i === s1.length) return s2.slice(j) === s3.slice(k) ? true : false;

  // If we've reached the end of s2, there's no need to iterate through the remainder of s1, but rather only to check whether it matches the remainder of s3.
  if (j === s2.length) return s1.slice(i) === s3.slice(k) ? true : false;

  // Setting the baseline boolean value.
  let answer = false;

  // Looking for a letter to match && the function at index + 1 of the string with the match to return true, which will happen once the index equals the length of the string. 
  if (s3.charAt(k) === s1.charAt(i) && isInterleave(s1, s2, s3, i + 1, j, k + 1) || s3.charAt(k) === s2.charAt(j) && isInterleave(s1, s2, s3, i, j + 1, k + 1)) answer = true;

  return answer;
};

module.exports = isInterleave;

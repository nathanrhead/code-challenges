/**
 * @param {string} s
 * @return {boolean}
 */

// My attempt. According to LeetCode, it's pretty slow, only beating 33.08% of submissions. 
const isPalindrome = function(s) {
  // Check input.
  if (!s || typeof s !== 'string') return;
 
  // Regex for all non-alphanumeric characters and make all remaining characters lower case.
  const regex = /[^a-zA-Z0-9]/gm;
  const sFiltered = s.replace(regex, '').toLowerCase();
  const stack = [];

  // Reverse the string by looping through it backwards and created a new array: O(N) for time and space, N being the number of characters in the string.
  for (i = sFiltered.length - 1; i >= 0; i--) {
    // Push onto the stack, effectively reversing the array.
    stack.push(sFiltered[i]);
  }

  return stack.join('') === sFiltered;
};

// Solution by t1o2mm3y on LeetCode.
const isPalindromeJSMethods = s => {
    return filterAlphaNumeric(s) == filterAlphaNumeric(s).split('').reverse().join('')
};

const filterAlphaNumeric = (s, nonAlphaNumeric = new RegExp('[^a-z0-9]','gi')) => s
    .toLowerCase()   
    .replace(nonAlphaNumeric, '')

// Solution by 


module.exports = isPalindrome;

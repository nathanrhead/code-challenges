/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = function(s) {
  if (s.length <= 1) return s;

  let start = 0;
  let end = 0;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    return right - left - 1; // Length of the palindrome
  }

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(i, i); // Odd length palindrome
    const len2 = expandAroundCenter(i, i + 1); // Even length palindrome
    const maxLen = Math.max(len1, len2);

    // If the new panlindrome is longer than the last longest one, update the start and end indices.
    if (maxLen > end - start) { 
      start = i - Math.floor((maxLen - 1) / 2); // For example, if the palindrome length is 5 (odd-length) and i is the center, start moves 2 positions left of i.
      end = i + Math.floor(maxLen / 2); // For example, if the palindrome length is 5, end moves 2 positions right of i.
    }
  }

  return s.substring(start, end + 1);
};

module.exports = longestPalindrome;

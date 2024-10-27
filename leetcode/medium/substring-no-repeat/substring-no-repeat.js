/**
 * @param {string} s
 * @return {number}
*/

const lengthOfLongestSubstring = function(s) {
  if (!s) return 0;

  let charSet = new Set();
  let left = 0;
  let maxLength = 0;
  
  for (let right = 0; right < s.length; right++) {
    // If a character is already in the set, remove the characters left of and including it.
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    
    // Add the current character to the set.
    charSet.add(s[right]);
    
    // Update the max length of the substring found so far.
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
};

module.exports = { lengthOfLongestSubstring };

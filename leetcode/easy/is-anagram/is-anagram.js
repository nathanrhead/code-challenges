/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// This is my own solution. It beat 6% of responses in time and space complexity. Still, it's O(n) for time and O(1) for time.
const isAnagram = function(s, t) {
  // If the lengths of s and t are different, return false.
  if (s.length !== t.length) return false;
  
  let temp = s; // Used to hold s as characters are removed from it.
  
  // Loop through t, comparing with s.
  for (let i = 0; i < t.length; i++) {
      // Get the index of char in s.
      const index = temp.indexOf(t[i]);

      // If a letter from t is in s, remove it from s.
      if (index !== -1) {
          temp = temp.slice(0, index) + temp.slice(index + 1);
      }
      // If a letter from t isn't in s, return false, becaus s isn't an anagram of t.
      else return false;
  }

  return true;
};

// // This is a solution from "addev" on LeetCode that beat 55% and is obviously much more elegant.
// const isAnagramLeetCodeSolution = function(s, t) {
//   const ns = s.split('').sort().toString();
//   const nt = t.split('').sort().toString();
  
//   return ns === nt;
// };

module.exports = isAnagram;

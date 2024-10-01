/**
 * @param {string} s
 * @return {number}
*/

const longestPalindrome = function(s) {
  if (s.length <= 0) return 0;
  if (s.length === 1) return 1; 

  const hashmap = {};
  let pCount = 0;

  for (let char of s) {
    if (!hashmap[char]) hashmap[char] = 1;
    else hashmap[char] = hashmap[char] + 1;
    if (hashmap[char] % 2 === 0) pCount = pCount + 2;
  }

  return s.length > pCount ? pCount + 1 : pCount;
};

module.exports = longestPalindrome;

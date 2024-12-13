/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
  const pCount = Array(26).fill(0);
  const sCount = Array(26).fill(0);
  const aCharCode = 'a'.charCodeAt(0); // -> 97: This maps each lowercase letter to an index from 0 to 25, which can be used to represent letters in a fixed-size array (like pCount or sCount in the sliding window algorithm).
  const result = [];
  let left = 0;

  // Count the frequency of characters in p.
  for (const char of p) {
    pCount[char.charCodeAt(0) - aCharCode]++;
  }

  // Iterate through s.
  for (let right = 0; right < s.length; right++) {
    // Count the frequency of characters in s.
    const currentCharIndex = s[right].charCodeAt(0) - aCharCode;
    sCount[currentCharIndex]++;

    // If the window size is greater than p's length, move the left pointer.
    if (right - left + 1 > p.length) {     
      const leftCharIndex = s[left].charCodeAt(0) - aCharCode;
      sCount[leftCharIndex]--;
      left++;
    }

    // Check whether the current window matches the frequency map of p, pushing the left (start) index if it does.
    if (arraysAreEqual(pCount, sCount)) {
      result.push(left);
    }
  }

  return result;
};

// Helper function to compare the two count arrays.
function arraysAreEqual(arr1, arr2) {  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = findAnagrams;

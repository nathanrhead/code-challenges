/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

const canConstruct = function(ransomNote, magazine) {
  const map = {};

  for (let i = 0; i < magazine.length; i++) {
      if (!map[magazine[i]]) map[magazine[i]] = 1;
      else map[magazine[i]] = map[magazine[i]] + 1;
  }

  for ( let j = 0; j < ransomNote.length; j++) {
      if (!map[ransomNote[j]] || map[ransomNote[j]] === 0) return false;
      else {
          map[ransomNote[j]] = map[ransomNote[j]] - 1;
      }
  }

  return true;
};

module.exports = canConstruct;

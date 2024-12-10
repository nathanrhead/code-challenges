/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  if (!digits) return [];

  const letterMap = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz'
  };
  const result = [];

  const backtrack = (index, combo) => {
      if (index === digits.length) {
          result.push(combo.join(''));
          return;
      }

      const letters = letterMap[digits[index]];

      for (const char of letters) {
          combo.push(char);
          backtrack(index + 1, combo);
          combo.pop();
      }
  }

  backtrack(0, []);
  return result;
};

module.exports = letterCombinations;

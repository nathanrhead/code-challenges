/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function(s) {
  let i = 0, sign = 1, result = 0;

  // Ignore leading whitespace.
  while (i < s.length && s[i] === ' ') i++;

  // Determine the sign.
  if (i < s.length && (s[i] === '+' || s[i] === '-')) {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }
  
  // Read the integer.
  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    result = result * 10 + (s[i] - '0'); // Builds the number up mathematically.
    i++;
  }

  // Handle the sign.
  result = result * sign;

  // Handle the overflow.
  if (result < -Math.pow(2, 31)) return -Math.pow(2, 31);
  if (result > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;

  return result;
};

module.exports = myAtoi;

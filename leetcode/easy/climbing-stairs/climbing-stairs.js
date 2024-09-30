/**
 * @param {number} n
 * @return {number}
*/

const climbStairs = function(n) {
  // The number of climbing methods from 1 to 3 equals the number of stairs, so return n.
  if (n <= 3) return n;

  // C is the current number of climbing methods; B is the penultimate number of climbing methods; and A is the second-to-penultimate number of climbing methods.
  let c = 5; b = 3; a = 2;

  // Iterate from 3 (the initial value of b) through n - 1, updating the values of a, b, and c per the equation, c = a + b.
  for (let i = 3; i < n; i++) {
      c = b + a;
      a = b;
      b = c;
  }
  
  // Return c.
  return c;
};

module.exports = climbStairs;

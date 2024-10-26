/**
 * @param {number} n
 * @return {number}
*/

// Iterative solution.
const climbStairs = function(n) {
  // Base case.
  if (n <= 1) return 1;

  let first = 1; // f(0) => If you're at the top (or there are no stairs), doing "nothing" still counts as an action.
  let second = 1; // f(1) => One step requires one action, too.

  // f(n) = f(n-1) + f(n-2)
  for (let i = 2; i <= n; i++) {
    let current = first + second;
    first = second;
    second = current;
  }

  return second;
};

// Recursive solution: While this implementation is elegant and straightforward, it can be inefficient for larger values of n due to the exponential time complexity O(2^n). This is because many calls are repeated multiple times.
const climbStairsRecursively = (n) => {
  if (n <= 1) return 1;

  return climbStairsRecursively(n - 1) + climbStairsRecursively(n - 2);
}

// Memoized recursive solution: keeps track of previously computed results, avoiding redundant calculation, thereby significantly reducing the time complexity to O(n), similar to the iterative dynamic-programming solution, while still retaining a recursive structure.
function climbStairsMemoized(n, memo = {}) {
  // Check if the result is already computed.
  if (n in memo) return memo[n];

  // Base cases.
  if (n <= 1) return 1;

  // Store the result in the memo object.
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
}

module.exports = { climbStairs, climbStairsRecursively, climbStairsMemoized };

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function(s, wordDict) {
  // Create a set of unique words for faster lookup.
  const wordSet = new Set(wordDict);

  console.log({wordSet});
  
  // Create a dp (dynamic programming) array to store the results of the subproblems.
  const dp = new Array(s.length + 1).fill(false);

  // The first element of the dp array is true because an empty string is always in the dictionary.
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    console.log({i});

    for (let j = 0; j < i; j++) {
      console.log({j});
      console.log('dp[j]:', dp[j]);
      console.log('substring:', s.substring(j, i));
      console.log('wordSet.has(s.substring(j, i)):', wordSet.has(s.substring(j, i)));
      
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        console.log('dp[i]:', dp[i]);
        console.log('----------------------------');

        break;
      } else {
        console.log('dp[i]:', dp[i]);
        console.log('----------------------------');
      }
    }
  }

  console.log({dp});

  return dp[s.length];
};

module.exports = { wordBreak };

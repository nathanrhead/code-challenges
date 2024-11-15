/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const results = [];

  function backtrack(path, depth) {
    console.log('Depth:', depth, '| Path:', path); // Output depth to track recursion level

    // Base case: if the path contains all numbers
    if (path.length === nums.length) {
      console.log('return at depth: ', depth);
      
      results.push([...path]);
      return;
    }

    // Try adding each number to the path
    for (let num of nums) {
      if (!path.includes(num)) {
        path.push(num);
        backtrack(path, depth + 1); // Increase depth as we go deeper

        console.log('pop ' + num + ' at depth: ', depth);

        path.pop(); // Backtrack by removing the last element
      }
    }
  }

  backtrack([], 0);  // Initial depth is 0
  return results;
}

module.exports = permute;

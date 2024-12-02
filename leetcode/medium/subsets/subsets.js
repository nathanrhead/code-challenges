/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  const results = [];

  // Recursive helper function.
  const backtrack = (loop, start, current) => {

    console.log({loop, start, current});

    // Add the current subset to the result.
    results.push([...current]);

    console.log({results});

    for (let i = start; i < nums.length; i++) {

      console.log({i}, 'nums[i]:', nums[i]);

      // Push the num at i into the current subset.
      current.push(nums[i]);

      console.log({current});

      console.log('backtrack', i + 1, current);

      // Move to the next element.
      backtrack(loop + 1, i + 1, current);

      console.log('pop', current[current.length - 1]);

      // Backtrack by removing the last element.
      current.pop();
    }
  };

  backtrack(1, 0, []);

  console.log({results});

  return results;
};

module.exports = subsets;

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
  if (!candidates || !candidates.length || !target) return [];
  
  const result = [];
  const _backtrack = (remaining, start, path) => {
    if (remaining === 0) result.push([...path]); // Base case: no remainder, so we have a sum.
    else { // Loop through the candidates array, calling the backtrack helper recursively on each value that is not more than the remainder needed to reach the target.
      for (let i = start; i < candidates.length; i++) {
        const current = candidates[i];
  
        console.log({current, remaining});

        // If the current candidate is less than or equal to the remaining target, add it to the path and repeat.
        if (current <= remaining) {
          // Push the current value into the path array, because it can possibly be used to reach the target.
          path.push(current);

          console.log('before:', {path});

          // Call the helper recursively with what remains to the target and the current index, because the same element can be reused in the summation.
          _backtrack(remaining - current, i, path);
          

          // Move one number back.
          path.pop(); 

          console.log('after:', {path});
        }
      }
    }
  };

  _backtrack(target, 0, []);
  return result;
};

module.exports = combinationSum;

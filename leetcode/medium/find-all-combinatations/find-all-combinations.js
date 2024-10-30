// Finds all the ways to add numbers to equal the target number.
function findCombinations(target, start = 1, current = [], results = []) {
  if (target === 0) {
    results.push([...current]);
    return;
  }

  for (let i = start; i <= target; i++) {
    current.push(i);
    findCombinations(target - i, i, current, results);
    current.pop(); // backtrack
  }

  return results;
}

console.log(findCombinations(11));

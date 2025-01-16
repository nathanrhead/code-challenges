/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function(tasks, n) {
  // Step 1: Count the frequency of each task
  const taskCounts = {};
  for (const task of tasks) {
      taskCounts[task] = (taskCounts[task] || 0) + 1;
  }

  // Find the maximum frequency
  const frequencies = Object.values(taskCounts);
  const maxFreq = Math.max(...frequencies);

  // Count how many tasks have the maximum frequency
  const maxCount = frequencies.filter(freq => freq === maxFreq).length;

  // Step 2: Calculate the minimum intervals required
  // Formula: (maxFreq - 1) * (n + 1) + maxCount
  const intervals = (maxFreq - 1) * (n + 1) + maxCount;

  // Step 3: Return the maximum of intervals and the total tasks
  return Math.max(intervals, tasks.length);
};

module.exports = leastInterval;

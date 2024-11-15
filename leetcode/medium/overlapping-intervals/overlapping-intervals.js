/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
  if (intervals.length <= 1) return intervals;

  const merged = [];

  // Sort the intervals array in ascending order by each entry's start value.
  intervals.sort((a, b) => a[0] - b[0]);

  for (const interval of intervals) {
    // If merged is empty or there's no overlap, add the interval to the merged array: merged = [a, b], interval = [c, d] => b < c.
    if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) merged.push(interval);
    
    // Otherwise, merge the intervals: merged = [a, b], interval = [c, d] => b = Math.max(b, d);
    else merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
  }

  return merged;
};

module.exports = merge;

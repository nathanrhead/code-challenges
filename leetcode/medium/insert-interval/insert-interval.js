/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
*/

const insert = function(intervals, newInterval) {
  const n = intervals.length;
  let result = [], i = 0;

  // Add all intervals before newInterval (no overlap).
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Merge all overlapping intervals.
  while (i < n && intervals[i][0] <= newInterval[1]) {
    // Reset the newInterval array to have the smallest and largest start and end points.
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  // Add the new interval (whether it has been updated above or not, i.e., it is smaller or larger than the intervals array.
  result.push(newInterval);

  // Add all the remaining intervals (no overlap)
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};

module.exports = insert;

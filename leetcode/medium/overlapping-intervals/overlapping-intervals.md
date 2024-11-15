# LeetCode Challenge #56: Overlapping Intervals | Rating: Medium

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

## Example 1

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]  
Output: [[1,6],[8,10],[15,18]]  
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

## Example 2

Input: intervals = [[1,4],[4,5]]  
Output: [[1,5]]  
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

## Constraints

- 1 <= intervals.length <= 104
- intervals[i].length == 2
- 0 <= starti <= endi <= 104

## Algorithm

1. Sort the intervals, if they aren't already sorted.
    - Sort the intervals based on their start times.
    - If two intervals have the same start time, sort them by their end times.
2. Iterate and merge:
    - Iterate through the sorted intervals, creating a merged list.
    - For each interval:
        - If the list is empty or the current interval does not overlap with the last interval in merged, add it to merged.
        - Otherwise, merge the current interval with the last interval in merged by updating the end of the last interval, adding it to merged.

## Big O

- Time: O(n log n), because the sorting method in JavaScript takes O(n log n) time, and dominates the O(n) time required to create the the merged array.
- Space: O(n) for the merged array.

# LeetCode Challenge #973: K-closest Points to Origin | Rating: Medium

Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

## Example 1

![Cartesian grid](https://assets.leetcode.com/uploads/2021/03/03/closestplane1.jpg)

Input: points = [[1,3],[-2,2]], k = 1  
Output: [[-2,2]]  
Explanation:

- The distance between (1, 3) and the origin is sqrt(10).
- The distance between (-2, 2) and the origin is sqrt(8).
- Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
- We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

Example 2

Input: points = [[3,3],[5,-1],[-2,4]], k = 2  
Output: [[3,3],[-2,4]]  
Explanation: The answer [[-2,4],[3,3]] would also be accepted.

## Constraints

- 1 <= k <= points.length <= 104
- -104 <= xi, yi <= 104

## Notes

- I tried and partly failed to use a stack to order the distances from smallest to largest and a map to easily find the distance's coordinates, but this approach failed when there were two coordinates with the same distance, e.g., [0,1] and [1,0].
- The current algorithm, from ChatGPT, uses the methods sort and slice and is very elegant.
- Time complexity is O(n log n) because of the sorting algorithm and beats 100% of JS solutions.
- Space complexity is O(n) because it's possible that all n points in the points array qualify for the shortest distance; it beats 74% of JS solutions.

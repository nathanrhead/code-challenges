# LeetCode Challenge #207: Course Schedule | Rating: Medium

## Task

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

## Example 1

Input: numCourses = 2, prerequisites = [[1,0]]  
Output: true  
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

## Example 2

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]  
Output: false  
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

## Example 3

Input: numCourses = 4, prerequisites = [[1, 0], [2, 1], [3, 2]]
Output: true  
Explanation: There are a total of 4 courses to take. The courses must be taken in this order: 0, 1, 2, 3. There is no cycle in the relationships as in example 2.

## Constraints

- 1 <= numCourses <= 2000
- 0 <= prerequisites.length <= 5000
- prerequisites[i].length == 2
- 0 <= ai, bi < numCourses
- All the pairs prerequisites[i] are unique.

## Notes

This prompt can be approached using graph theory.

1. Courses as nodes: Each course is represented as a node in a graph. The total number of courses is given by numCourses.
2. Prerequisites as edges: The prerequisites array indicates directed edges between nodes. For instance, the pair [ai, bi] signifies that you must take course bi before taking course ai. This can be represented as a directed edge from bi to ai in a directed graph.
3.Goal: Check whether there is a cycle in the directed graph. If there’s a cycle, it means there’s a set of courses that depend on each other in a way that makes it impossible to complete them (e.g., course 0 requires course 1, and course 1 requires course 0).

To solve this problem, use the topological sorting technique to determine the order in which nodes (or courses) can be completed given their dependencies.

1. Build a graph: Represent the courses and their prerequisites as a directed graph using an adjacency list.
2. Track in-degrees: Maintain an array to track the in-degree (edges, or number of prerequisites) of each course. A course with an in-degree of 0 can be taken immediately.
3. Kahn’s Algorithm (BFS):

    - Use a queue to process courses with an in-degree of 0.
    - For each course processed, reduce the in-degrees of its neighboring courses (the courses that depend on it).
    - If any neighboring course’s in-degree becomes 0, add it to the queue.
    - Count the number of processed courses. If you’ve processed all courses, return true; otherwise, return false if there are courses left with non-zero in-degrees (indicating a cycle).

- Time complexity: O(V + E), where:
  - V is the number of courses (or vertices).
  - E is the number of prerequisites (or edges).
- Space complexity: O(V + E).

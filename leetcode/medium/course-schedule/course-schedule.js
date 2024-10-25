/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
*/

const canFinish = function(numCourses, prerequisites) {
  // Step 1: Build the graph (adjacency list) and in-degree (incoming edges) array.
  const graph = new Array(numCourses).fill(0).map(() => []);
  const inDegree = new Array(numCourses).fill(0);

  for (let [a, b] of prerequisites) {
    graph[b].push(a); // [b] -> a
    inDegree[a]++; // A value of 0 means that the course number (index) has no prerequisites.
  }

  // Step 2: Initialize the queue with courses that have no prerequisites.
  const queue = [];

  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  // Step 3: Process the queue.
  let processedCount = 0;

  while (queue.length > 0) {
    const course = queue.shift(); // Grab the first course in the list.
    processedCount++;

    // Reduce the in-degree of neighboring courses.
    for (let neighbor of graph[course]) {
      inDegree[neighbor]--;

      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  // Step 4: Check if all courses were processed
  return processedCount === numCourses;
};

module.exports = canFinish;

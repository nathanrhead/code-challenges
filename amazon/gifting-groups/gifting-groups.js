/*
 * Complete the 'countGroups' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY related as parameter.
 */

// Depth-first Search.
function countGroupsDfs(related) {
  const n = related.length;
  const visited = new Array(n).fill(false); // Array of subscribers (rows).
  let groupCount = 0;
  
  // Traverse depth-first through the matrix (row by row), marking each row as visited.
  function dfs(i) {
    // Mark the current node as visited.
    visited[i] = true;

    // Visit all the nodes connected to i (the values of the row).
    for (let j = 0; j < n; j++) {
      // If the subscriber is related to the receiver (e.g., a value of 1) and the relationship isn't self, visit the next subscriber recursively.
      if (related[i][j] === '1' && !visited[j]) {        
        dfs(j);
      } 
    }
  }
  
  // Iterate over each subscriber (row).
  for (let i = 0; i < n; i++) {    
    if (!visited[i]) { // If the subscriber (row) hasn't already been visited.
      // Start DFS for the unvisited subscribers (row).
      dfs(i);

      // Found a new group.
      groupCount++;
    }
  }
  
  return groupCount;
}

// Breadth-first Search.
function countGroupsBfs(related) {
  const n = related.length;
  const visited = new Array(n).fill(false);
  
  function bfs(i) {
    const queue = [i];
    visited[i] = true;
      
    while (queue.length > 0) {
      const subscriber = queue.shift();

      for (let j = 0; j < n; j++) {
        if (related[subscriber][j] === '1' && !visited[j]) {
          visited[j] = true;
          queue.push(j);
        }
      }
    }
  }
  
  let groupCount = 0;
  // Iterate over each subscriber.
  for (let i = 0; i < n; i++) {
    if (!visited[i]) { // If the subscriber (row) hasn't been visited.
      // Start BFS for the unvisited subscribers (row).
      bfs(i);

      // Found a new group.
      groupCount++;  
    }
  }
  
  return groupCount;
}

module.exports = { countGroupsBfs, countGroupsDfs };

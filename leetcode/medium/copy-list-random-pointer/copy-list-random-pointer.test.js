'use strict';

const solution = require('./copy-list-random-pointer');

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
    this.random = null;
  }
}

function createListFromArray(arr) {
  if (arr.length === 0) return null;

  // Step 1: Create all nodes.
  const nodes = arr.map(item => new Node(item[0]));
  
  // Step 2: Link the nodes using `next`.
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1]; // Point current node to the next
  }

  // Step 3: Set the random pointers.
  for (let i = 0; i < nodes.length; i++) {
    const randomIndex = arr[i][1];

    // Only set if the random index is not null.
    if (randomIndex !== null) nodes[i].random = nodes[randomIndex];
  }

  return nodes[0]; // Return the head of the linked list.
}

function createArrayFromList(head) {
  if (!head) return null;

  let current = head, resultArray = [], index = 0;
  const nodeIndexMap = new Map();

  // Create the array of [nodeValue, randomNodeValue].
  while (current) {
    nodeIndexMap.set(current, index);
    resultArray.push([current.val, null]);
    current = current.next;
    index++;
  }

  // Loop over the list again to input the randomNodes' indices.
  current = head;
  while (current) {
    if (current.random !== null) resultArray[nodeIndexMap.get(current)][1] = nodeIndexMap.get(current.random);
  
    current = current.next;
  }

  return resultArray;
}


describe ('leetcode challenge to determine whether a link list contains a cycle', () => {
  it ('returns true when a linked list contains a cylce', () => {
    expect(createArrayFromList(solution(createListFromArray([[7,null],[13,0],[11,4],[10,2],[1,0]])))).toEqual([[7,null],[13,0],[11,4],[10,2],[1,0]]);
    expect(createArrayFromList(solution(createListFromArray([[1,1],[2,1]])))).toEqual([[1,1],[2,1]]);
    expect(createArrayFromList(solution(createListFromArray([[3,null],[3,0],[3,null]])))).toEqual([[3,null],[3,0],[3,null]]);
  });
});

# LeetCode Challenge #146: LRU Cache | Rating: Medium

## Task

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

- LRUCache(int capacity): Initialize the LRU cache with positive size capacity.
- int get(int key): Return the value of the key if the key exists, otherwise return -1.
- void put(int key, int value): Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
- The functions get and put must each run in O(1) average time complexity.

## Example 1

Input:

- ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
- [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]

Output: [null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation:

- LRUCache lRUCache = new LRUCache(2);
- lRUCache.put(1, 1); // cache is {1=1}
- lRUCache.put(2, 2); // cache is {1=1, 2=2}
- lRUCache.get(1);    // return 1
- lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
- lRUCache.get(2);    // returns -1 (not found)
- lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
- lRUCache.get(1);    // return -1 (not found)
- lRUCache.get(3);    // return 3
- lRUCache.get(4);    // return 4

## Constraints

- 1 <= capacity <= 3000
- 0 <= key <= 104
- 0 <= value <= 105
- At most 2 * 105 calls will be made to get and put.

## Approach

1. Data Structures

    - Doubly-linked list to track the most used (head) and least used (tail).
    - Hash map to make lookup by key of each node an operation in constant time.

2. Method

    - When a cache hit occurs (i.e., the requested key exists in the cache):
      - The corresponding node is found using the hash map in O(1).
      - The node is moved to the front of the doubly linked list to mark it as most recently used.
    - When a cache miss occurs (i.e., the requested key does not exist in the cache):
      - If the cache has reached its capacity:
        - The least recently used node (at the back of the doubly linked list) is removed.
        - Its corresponding entry is deleted from the hash map.
      - A new node is created and added to the front of the doubly linked list.
      - An entry for the new node is added to the hash map.

## Big O

- Time:
  - Get: O(1):
    - Hash-map lookup is by key, so constant time.
    - Updating the doubly linked list is O(1), because pointer adjustments require constant time.
  - Put is O(1).
    - Hash-map lookup is by key, so constant time.
    - Updating the node's value and moving it to the head of the linked list requires constant time.
    - Inserting a new node into the linked list at the head requires constant time.
- Space: O(n), where n is the cache's capacity.
  - The hash map stores up to capacity key-value pairs: O(n).
  - The doubly linked list stores up to capacity nodes: O(n).
  
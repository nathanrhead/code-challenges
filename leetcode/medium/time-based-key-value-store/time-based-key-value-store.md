# LeetCode Challenge #981: Time Based Key-Value Store | Rating: Medium

## Task

Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:

- TimeMap() Initializes the object of the data structure.
- void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
- String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".

## Example 1

Input:

- ["TimeMap", "set", "get", "get", "set", "get", "get"]
- [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]

Output:

- [null, null, "bar", "bar", null, "bar2", "bar2"]

Explanation:

- TimeMap timeMap = new TimeMap();
- timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
- timeMap.get("foo", 1);         // return "bar"
- timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
- timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
- timeMap.get("foo", 4);         // return "bar2"
- timeMap.get("foo", 5);         // return "bar2"

## Example 2

Input:

- ["TimeMap","set","set","get","get","get","get","get"]
- [[],["love","high",10],["love","low",20],["love",5],["love",10],["love",15],["love",20],["love",25]]

Output:

- [null,null,null,"","high","high","low","low"]

## Constraints

- 1 <= key.length, value.length <= 100
- key and value consist of lowercase English letters and digits.
- 1 <= timestamp <= 107
- All the timestamps timestamp of set are strictly increasing.
- At most 2 * 105 calls will be made to set and get.

## Big O

- Time:
  - Set: O(1) per operation.
  - Get: O(log n), where n is the number of timestamps for the given key.
- Space: O(K + V), where K is the number of keys and V is the total number of timestamp-value pairs across all keys.

## Notes on Using an Array over a Linked List

1. Binary Search: Arrays are ideal for binary search because they provide random access and are contiguous in memory, making it possible to quickly access elements by index during the binary search.
2. Simplicity: Arrays are simple to implement and manipulate in most programming languages, because they don’t require explicit pointers or node management, unlike linked lists.
3. Performance: Linked lists are less cache-friendly, because they're not stored next to each other in memory, as arrays are, and have higher overhead due to the need to store pointers for each node.
4. When to Use a Linked List
    - Insertions are frequent at arbitrary positions (e.g., timestamps arriving out of order).
    - You don’t need random access and your use case benefits from efficient insertions and deletions.

# Leetcode | Merge Two Sorted Linked Lists | Easy

## Task

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

## Example 1

![Diagrams of the two lists passed to the function.](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

## Example 2

Input: list1 = [], list2 = []
Output: []

## Example 3

Input: list1 = [], list2 = [0]
Output: [0]

## Constraints

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

## Algorithm

1. Create a dummy node to start the merged list.
2. Traverse both lists and add the smaller value to the merged list.
3. If one list is longer, append the rest of it.
4. Return the head of the merged list (skip the dummy node).

## Time Complexity (Big O)

- Space: O(N + M), where N is the length of list1 and M is the length of list2: every iteration of the while loop either consumes a node from list1 or list2, and the if (list1 !== null) / if (list2 !== null) conditions at the end just attach the remainder without further iteration.
- Time: O(1): apart from the dummy node, no new nodes are created; the nodes in the return are reused from the input lists.

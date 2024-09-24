# Leetcode Challenge 141: Linked List Cycle | Rating: Easy

## Task

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

## Example 1

Input: head = [3,2,0,-4], pos = 1  
Output: true  
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

## Example 2

Input: head = [1,2], pos = 0  
Output: true  
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

## Example 3

Input: head = [1], pos = -1  
Output: false  
Explanation: There is no cycle in the linked list.

## Constraints

- The number of the nodes in the list is in the range [0, 104].
- -105 <= Node.val <= 105
- pos is -1 or a valid index in the linked-list.

## Algorithm: Two Pointer

1. Define two variables to hold the slow pointer and the fast pointer and set them equal to the head.
2. Traverse through the linked list while both the fast pointer and its next node are not null.
3. In the while loop, reset the slow pointer to its next node (one step) and the fast pointer to its next node's next node (two steps).
4. If there is a cycle in the list, the fast pointer will lap the slow pointer, meaning that if they are equal at any point, return true.
5. If the while loop ends without returning anything, the fast node has reached the end of the list, and false is to be returned.

## Notes

- When I'm not familiar with a concept or the structure of the input, I'll often console log it to help myself determine how to approach the problem. In this case, however, the value of the next node in the console was returned as "Error." So, I looked up a posted solution (two-pointer: one slow, one fast) in LeetCode and went from there. My initial attempt at a solution used a hashmap and depended on the values of the nodes never repeating, which of course was not explicitly stated as a condition. In this case, anyway, it's not the value we're checking, but the location of the node, i.e., not whether slowNode.value === fastNode.value but, rather, whether slowNode === fastNode.
- The two-pointer solution in JavaScript registered in the 88th perentile for time and space complexity.

# LeetCode Challenge #876: Middle of a Linked List | Rating: Easy

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

## Example 1

![Diagram of a linked list consiting of five nodes](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg)

Input: head = [1,2,3,4,5]  
Output: [3,4,5]  
Explanation: The middle node of the list is node 3.

## Example 2

![Diagram of a linked list consisting of six nodes](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg)

Input: head = [1,2,3,4,5,6]  
Output: [4,5,6]  
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

## Constraints

- The number of nodes in the list is in the range [1, 100].
- 1 <= Node.val <= 100

## Notes

- Solved in under 10 minutes.
- Time and space complexity of O(n), because the list is traversed fully and a stack is created equal to the length of the list.
- This solution beats only 30% of submitted JS solutions on LeetCode.
- The pointer solution beats 98% of solutions on memory usage and 65% on time and it's simpler and more elegant.

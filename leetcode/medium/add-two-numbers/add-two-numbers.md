# LeetCode Challenge #2: Add Two Numbers | Rating: Medium

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

## Example 1

Input: l1 = [2,4,3], l2 = [5,6,4]  
Output: [7,0,8]  
Explanation: 342 + 465 = 807.

## Example 2

Input: l1 = [0], l2 = [0]  
Output: [0]  

## Example 3

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]  
Output: [8,9,9,9,0,0,0,1]

## Constraints

- The number of nodes in each linked list is in the range [1, 100].
- 0 <= Node.val <= 9
- It is guaranteed that the list represents a number that does not have leading zeros.

## Notes

- ChatGPT's solution, which adds the numbers of the two lists, starting with the ones place, and creates a new node for the ones place of the result, carrying any remainder over to the next loop (tens, hundreds, etc.).
- Big O
  - Time: O(max(m, n)), where m is the number of nodes in the first linked list and n is the number of nodes in the second linked list.
  - Space:  O(max(m, n)) due to the creation of new nodes for the result linked list, which will store a digit for each corresponding sum of the input nodes.

# LeetCode Challenge #11: Container With the Most Water | Rating: Medium

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

## Example 1

![Graph of the heights](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg)

Input: height = [1,8,6,2,5,4,8,3,7]  
Output: 49  
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

## Example 2

Input: height = [1,1]  
Output: 1

## Constraints

- n == height.length
- 2 <= n <= 105
- 0 <= height[i] <= 104

## Algorithm: Two-Pointer

1. Initialize the Pointers:
    - left pointer at the beginning of the array;
    - right pointer at the end of the array;
    - maxWater to keep track of the maximum water contained.
2. Two-Pointer Approach
    - Calculate the width between the two pointers.
    - Determine the height of the container by taking the minimum of the heights at the two pointers.
    - Calculate the current water contained and update maxWater if the current water is greater.
    - Move the pointer pointing to the shorter line inward to potentially find a taller line.
3. Return the Maximum Water
    - Continue the process until the two pointers meet.
    - Return the maximum water contained.

## Big O

- Time: O(n) for the while loop, which visits each element of the array.
- Space: O(1), because of the use of a constant amount of extra space.

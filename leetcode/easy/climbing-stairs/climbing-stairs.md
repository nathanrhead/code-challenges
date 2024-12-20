# LeetCode Challenge #70: Climbing Stairs | Rating: Easy

## Task

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

## Example 1

Input: n = 2  
Output: 2  
Explanation: There are two ways to climb to the top.

1. 1 step + 1 step
2. 2 steps

## Example 2

Input: n = 3  
Output: 3  
Explanation: There are three ways to climb to the top.

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

## Constraints

- 1 <= n <= 45

## Whiteboard

![Whiteboard of the solution](./climbing-stairs-whiteboard.png)

## Notes

This solution came from ChatGPT, but I put together the whiteboard.

The key insight is that to get to step n, you have only two choices:

- come from n-1 (taking 1 step from the previous step);
- or come from n-2 (taking 2 steps from the step before).

So, the recurrence relation is: f(n) = f(n-1) + f(n-2).

This is a good example of dynamic programming, because it can be broken down into a discreet sub-problem, solved iteratively (or recursively), and reuse the solution to the sub-problem to optimize space and time complexity.

## Big O

- Time: O(n) because of the for-loop
- Space: O(1) because a finite number of constant variables are created.

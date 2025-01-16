# LeetCode Challenge #621: Task Scheduler | Rating: Medium

## Task

You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.

Return the minimum number of CPU intervals required to complete all tasks.

## Example 1

Input: tasks = ["A","A","A","B","B","B"], n = 2  
Output: 8  
Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.  
After completing task A, you must wait two intervals before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th interval, you can do A again as 2 intervals have passed.

## Example 2

Input: tasks = ["A","C","A","B","D","B"], n = 1  
Output: 6  
Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.  
With a cooling interval of 1, you can repeat a task after just one other task.

## Example 3

Input: tasks = ["A","A","A", "B","B","B"], n = 3  
Output: 10  
Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.  
There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

## Constraints

- 1 <= tasks.length <= 104
- tasks[i] is an uppercase English letter.
- 0 <= n <= 100

## Algorithm (from ChatGPT)

1. Count the frequency of each task (taskCounts).
2. Find the maximum frequency (maxFreq).
3. Count how many tasks have the maximum frequency (maxCount).
4. Sort and determine the cooling period: (maxFreq - 1) * (n + 1) + maxCount
    - The most frequent task dictates the structure of the schedule.
    - Arrange tasks so that the most frequent task is scheduled first with a gap of n intervals before it’s repeated.
5. Calculate idle slots: Based on the frequency of the most frequent task, determine how many idle slots are required to fit the cooling periods.
6. Fill idle slots with other tasks:
    - Use less frequent tasks to fill idle slots.
    - If there are enough tasks to fill all idle slots, there won’t be any idle time; otherwise, calculate the remaining idle time.
7. Return the total time: The total time is the number of tasks plus idle intervals (if any).

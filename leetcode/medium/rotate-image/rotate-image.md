# LeetCode Challenge #48: Rotate Image | Medium

## Task

Given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly; do not allocate another 2D matrix to do the rotation.

## Example 1

![Diagram of the input matrix and its output](https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg)

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

## Example 2

![Diagram of the input matrix and its output](https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg)

Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

## Constraints

- `n == matrix.length == matrix[i].length`
- `1 <= n <= 20`
- `-1000 <= matrix[i][j] <= 1000`

## Approach

1. Transpose the matrix (flip over its diagonal): transposing swaps `matrix[i][j]` with `matrix[j][i]`, turning rows into columns.

    *Before*

    ```text
    [1, 2, 3]  
    [4, 5, 6]  
    [7, 8, 9]
    ```

    Steps:

    - (0,1) with (1,0) → 2 ⇄ 4
    - (0,2) with (2,0) → 3 ⇄ 7
    - (1,2) with (2,1) → 6 ⇄ 8

    *After*

    ```text
    [1, 4, 7]  
    [2, 5, 8]  
    [3, 6, 9]
    ```

2. Reverse each row: reversing each row effectively rotates the matrix clockwise.

## Big O

Time: O(n^2): nested looping in both steps.
Space: O(1): rotated in place.

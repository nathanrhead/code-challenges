/**
 Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix: number[][]): void {
  // Get the length of the matrix.
  const n = matrix.length

  // Transpose the matrix.
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }

  // Reverse each row.
  for (let row of matrix) {
    row.reverse()
  }
}
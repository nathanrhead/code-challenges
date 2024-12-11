/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  if (!board || !board.length || !word) return false;

  const rows = board.length;
  const cols = board[0].length;

  // Pre-check to ensure that the word can be formed from the board.
  const charCount = {};
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const char = board[r][c];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  for (const char of word) {
    if (!charCount[char] | charCount[char] <= 0) return false;
    charCount[char]--;
  }


  const dfs = (row, col, index) => {

    console.log({row, col, index});

    // Base case: we've found the word.
    if (index === word.length) {
      console.log('index === word.length: word found, return true');
      return true;
    }

    // If out of bounds or the letter doesn't match, return false.
    if (row < 0 || col < 0 || row >= rows || col >= cols || board[row][col] !== word[index]) {
      console.log('out of bounds or the letter doesn\'t match: return false');
      return false;
    }

    // Mark the cell as visited by temporarily altering its value.
    const temp = board[row][col];
    board[row][col] = '#';

    console.log({temp});

    // Explore all possible directions: up, down, left, right.
    const directions = [
      [0, 1],  // Right
      [0, -1], // Left
      [1, 0],  // Down
      [-1, 0]  // Up
    ];

    for (let [dr, dc] of directions) {
      console.log(dr === 0 && dc === 1 ? 'check right' : dr === 0 && dc === -1 ? 'check left' : dr === 1 && dc === 0 ? 'check down' : 'check up');
      
      if (dfs(row + dr, col + dc, index + 1)) {
        console.log('if dfs(row + dr, col + dc, index + 1): return true');
        return true;
      }
    }

    // Restore the cell value (backtracking)
    board[row][col] = temp;
    
    console.log('restore the cell value: return false');

    // If we've reached this point, the word doesn't exist.
    return false;
  };

  // Iterate through the board and start the search when a character matches the word's initial letter.
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === word[0] && dfs(r, c, 0)) return true;
    }
  }

  // If we've reached this point, the word doesn't exist.
  return false;
};

module.exports = exist;

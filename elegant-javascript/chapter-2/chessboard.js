// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// This is the author's solution, which I skipped to because it's 4:30 in the birdsong morning.

function chessBoard() {
  let size = 8;
  let board = '';

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 === 0) board += ' ';
      else board += '#';
    }
    board += '\n';
  }
  return board;
}

module.exports = chessBoard;

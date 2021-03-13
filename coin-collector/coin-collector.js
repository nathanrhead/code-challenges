'use strict';
// Works for square matrices, e.g. 2x2, 3x3, 4x4, etc.

function getCoins(array, row, col) {

  let numOfCoins = 0; // coin counter
  let moreCoins = true; // default boolean for the while loop
  let newRow = 0; // move x
  let newCol = 0; // move y

  // Check whether the starting location of the array at (x,y) has coins and, if so, add its coins to the counter and reset its value to zero.
  if (array[row][col] > 0) {
    numOfCoins += array[row][col];
    array[row][col] = 0;
  }

  while (moreCoins === true) {
    let coins = [0, 0, 0, 0]; // up, right, down, left

    // check up
    if (row > 0 && col < array[row-1].length && array[row - 1][col] > 0) coins[0] = array[row - 1][col];

    // check right
    if (col < array[row].length - 1 && array[row][col + 1] > 0)  coins[1] = array[row][col + 1];

    // check down
    if (row < array.length - 1 && row < array[row+1].length && array[row + 1][col] > 0) coins[2] = array[row + 1][col];


    // check left
    if (col > 0 && array[row][col - 1] > 0) coins[3] = array[row][col - 1];

    console.log('Coins:', coins);

    let highestCoin = 0; // Hold the highest coin value of the four adjacent indices.
    let maxIndex = 0; // Hold the index of the highest value.

    const getMax = coins.reduce((acc, val, idx) => {
      if (val > acc && val > highestCoin) {
        acc = val;
        highestCoin = acc;
        maxIndex = idx;
      }
      return maxIndex;
    }, 0);

    if (getMax === 0) newRow = row - 1;
    if (getMax === 1) newCol = col + 1;
    if (getMax === 2) newRow = row + 1;
    if (getMax === 3) newCol = col - 1;

    if (highestCoin === 0) { // Check the coin array and, if all at zero, stop the counter (loop). 
      console.log('All done.');
      moreCoins = false;
    } else { // If the coin array isn't empty, move x or y per the getMax index if conditional, above, add the value of the new position to the coin counter, empty that position, and start the while loop over.
      row = newRow;
      col = newCol;
      console.log('X:', newRow, 'Y:', newCol);
      numOfCoins += array[row][col];
      // console.log('Total Coins:', numOfCoins);
      array[row][col] = 0;
    }
  } // End of the while-loop

  console.log('Result:', numOfCoins);
  return numOfCoins;
}

const array1 = [
  [1, 1, 1],
  [0, 1, 0],
  [0, 8, 0]
];

const array2 = [
  [0, 1, 1],
  [4, 1, 0],
  [0, 8, 0]
];

const array3 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
];

const array4 = [
  [1, 1],
  [1, 1],
  [1, 1]
];

const array5 = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];

const array6 = [
  [1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1],
  [1, 1, 1, 1]
];

const array7 = [
  [10, 9, 8],
  [7, 6, 5],
  [4, 3, 2],
  [1, 0, 10]
];

const array8 = [
    [1,1,1],
    [0,1,1,4],
    [0,8,0,1,3]
]

const array9 = [
    [1,1,1],
    [1,1,1,1],
    [1,1,1,1,1,1,1,1]
]

const array10 = [
    [1,1,1,1,1,1,1,1],
    [1,4,1,10],
    [1,1,]
]

getCoins(array10, 0, 0);

'use strict';

// Tests I wrote for solutions to chapter two exercises from Eloquent JavaScript

const chessboard = require('./chessboard');
const fizzBuzz = require('./fizz-buzz');
const fizzBuzzSolution = require('./fizz-buzz');
const poundPyramid = require('./pound-pyramid');

describe ('solutions to the chessboard code challenge', () => {
  it ('returns the expected chessboard', () => {
    const board =
    ' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n';
    expect(chessboard()).toEqual(board);
  });
})

describe ('solutions to the fizz-buzz code challenge', () => {
  it ('returns the proper strings for 100 lines', () => {
    // console.log(fizzBuzz());
    expect(fizzBuzz()).toBe(string);
  });

  it ('returns the proper strings for 100 lines', () => {

    expect(fizzBuzzSolution()).toBe(string);
  });

})

describe ('solutions to the pound-pyramid code challenge', () => {
  
})
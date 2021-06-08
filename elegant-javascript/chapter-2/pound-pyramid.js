'use strict';

// Task: Write a loop that makes seven calls to console.log to output a triangle made up of pound signs incremented by one on each new line.

// This is my first solution, which doesn't return anything testable (unless I were to spy on the console.log, which I don't trust; also, I don't really know how to write that kind of test; I prefer to test a function that returns a value), so I wrote solutionTwo.
function poundPyramid() {
  let symbol = '#';
  for (let i = 0; i < 7; i++) {
    console.log(symbol);
    symbol+= '#';
  };
  console.log(symbol);
}
// poundPyramid();

// Here is solution two.
function poundPyramidTwo() {
  let size = 7;
  let pyramid = '';
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (x <= y) pyramid += '#';
    };
    pyramid += '\n';
  };
  return pyramid;
}


// This is the author's solution to the pyramid task:
function poundPyramidSolution() {
  for (let line = "#"; line.length < 8; line += "#") console.log(line);
  };
  // poundPyramidSolution();

  module.exports = { poundPyramid, poundPyramidTwo, poundPyramidSolution };
  
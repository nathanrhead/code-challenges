'use strict';

// Task: Write a loop that makes seven calls to console.log to output a triangle made up of pound signs incremented by one on each new line.
function poundPyramid() {
  let symbol = '#';
  for (let i = 0; i < 7; i++) {
    console.log(symbol);
    symbol+= '#';
  };
  console.log(symbol);
}
// poundPyramid();

// This is the author's solution to the pyramid task:
function poundPyramidSolution() {
  for (let line = "#"; line.length < 8; line += "#") console.log(line);
  };
  // poundPyramidSolution();

  module.exports = { poundPyramid, poundPyramidSolution };
  
'use strict';

// My solution to FizzBuzz:
const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) return 'FizzBuzz';
    else if (i % 5 === 0) return 'Buzz';
    else if (i % 3 === 0) return 'Fizz';
    else return i;
  };
}

// The author's solution to FizzBuzz:
function fizzBuzzSolution() {
  for (let n = 1; n <= 100; n++) {
  let output = '';
  if (n % 3 == 0) output += 'Fizz';
  if (n % 5 == 0) output += 'Buzz';
  console.log(output || n);
  return output || n; 
  };
}
// module.exports = { fizzBuzz, fizzBuzzSolution };

module.exports = fizzBuzz;

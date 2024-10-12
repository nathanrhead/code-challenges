'use strict';

// My solution to FizzBuzz:
const fizzBuzz = () => {
  let answer = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) answer.push('FizzBuzz'); // i is divisible by both 3 & 5.
    else if (i % 5 === 0) answer.push('Buzz'); // i is divisible by 5.
    else if (i % 3 === 0) answer.push('Fizz'); // i is divisible by 3.
    else answer.push(i); // i is divisible neither by 5 nor 3.
  };

  return answer;
}

// The author's solution to FizzBuzz:
function fizzBuzzSolution() {
  let answer = [];

  for (let n = 1; n <= 100; n++) {
    let output = ''; // Used to concatenate "Fizz" and "Buzz" when n is divisible by both 3 and 5.

    if (n % 3 == 0) output += 'Fizz'; // n is divisible by 3.
    if (n % 5 == 0) output += 'Buzz'; // n is divisible by 5. 

    answer.push(output || n); // If there is no output, push n to the answer array.
  };

  return answer;
}
// module.exports = { fizzBuzz, fizzBuzzSolution };

module.exports = { fizzBuzz, fizzBuzzSolution };

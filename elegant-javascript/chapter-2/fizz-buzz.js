'use strict';

// My solution to FizzBuzz:
const fizzBuzz = () => {
  let answer = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) answer.push('FizzBuzz');
    else if (i % 5 === 0) answer.push('Buzz');
    else if (i % 3 === 0) answer.push('Fizz');
    else answer.push(i);
  };
  // console.log({answer});
  return answer;
}

// The author's solution to FizzBuzz:
function fizzBuzzSolution() {
  let answer = [];
  for (let n = 1; n <= 100; n++) {
  let output = '';
  if (n % 3 == 0) output += 'Fizz';
  if (n % 5 == 0) output += 'Buzz';
  // console.log(output || n);
  answer.push(output || n);
  };
  return answer;
}
// module.exports = { fizzBuzz, fizzBuzzSolution };

module.exports = { fizzBuzz, fizzBuzzSolution };

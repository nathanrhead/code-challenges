'use strict';

//-----------------------Hacker Rank Stub Code---------------------
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const n = parseInt(readLine(), 10);
    
//----------------- Write your code below --------------------
    let binaryArray = [];
    toBinary(n, binaryArray);
    result(binaryArray);
}

function toBinary(n, array) {
    if (n < 1) return;
    let nextN = Math.floor(n / 2);
    let remainder = (n % 2);
    array.unshift(remainder);
    toBinary(nextN, array);
};

function result(resultsArray) {
  if(!resultsArray) return error;
  let onesCounter = 0;
  let answerArray = [];
  for (let i = 0; i <= resultsArray.length; i++) {
    if (resultsArray[i] === 1) { onesCounter++; 
    } else if (resultsArray[i] === 0 && onesCounter !== 0 || i === resultsArray.length) {
    answerArray.push(onesCounter);
    onesCounter = 0;
    }
  }
  let answer = answerArray.reduce((acc, val) => {
    return acc < val ? acc = val : acc = acc;
  }, 0);

  console.log(answer);
}

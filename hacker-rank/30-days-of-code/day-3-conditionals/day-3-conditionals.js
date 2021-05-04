'use strict';

//-------------Hacker Rank Stub Code----------------------
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
//----------------------End Hacker Rank Stub Code-------------------


function main() {
    const N = parseInt(readLine().trim(), 10);
// Write your code here

// If *n* is odd, print "Weird";
    if (N % 2 === 1) console.log('Weird');

// If *n* is even and in the inclusive range of 2 to 5, print "Not Weird";
    else if (N % 2 === 0 && N >= 2 && N <= 5) console.log('Not Weird');

// If *n* is even and in the inclusive range of 6 to 20, print "Weird";
    else if (N % 2 === 0 && N >= 6 && N <= 20) console.log('Weird');

// If *n* is even and greater than 20, print "Not Weird".
    else console.log('Not Weird');
}

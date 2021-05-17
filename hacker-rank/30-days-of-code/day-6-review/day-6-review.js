'use strict';

function processData(input) {
  
  //Enter your code here
  let unit = input.split('\n').slice(1);

  unit.forEach(string => {
    let even = '';
    let odd = '';

    for (let i = 0; i < string.length; i++) {
      i % 2 ? odd += string[i] : even += string[i];
    }
    console.log(`${even} ${odd}`);
  });
}

//------------- Hacker Rank Stub Code ---------------------
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});

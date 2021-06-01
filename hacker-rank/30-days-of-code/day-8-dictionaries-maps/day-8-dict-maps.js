'use strict';

function processData(input) {
  //Enter your code here
  
  const data = input.split('\n'); // data: [ '3', 'sam 99912222', 'tom 11122222', 'harry 12299933', 'sam', 'edward', 'harry' ]
  const numOfEntries = parseInt(data[0]);
  let phonebook = {}; // phonebook: { sam: '99912222', tom: '11122222', harry: '12299933' }
          
  for (let i = 1; i <= numOfEntries; i++) {
      let temp = data[i].split(' ');
      phonebook[temp[0]] = temp[1];
  };
      
  for (let k = numOfEntries + 1; k < data.length; k++) {
      // console.log('Data at k:', data[k]);
      phonebook.hasOwnProperty(data[k]) ? console.log(data[k] + '=' + phonebook[data[k]]) : console.log('Not found');
  }
} 

//----------------------Hacker Rank Stub Code---------------------------
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});

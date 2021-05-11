'use strict';

const Hashmap = require('./hashtable');

// Solution 1: using .split() and .filter()
/*
function countChar(string, char) {
  if (!string || !char) return 0;
  char = char.toLowerCase();
  if (string === char) return 1;
  const array = string.toLowerCase().split('');
  const filteredArray = array.filter(letter => letter === char);
  return filteredArray.length;  
}
*/

// Solution 2: using .split() and .reduce()
/*
function countChar(string, char) {
  if (!string || !char) return 0;
  char.toLowerCase();
  const array = string.toLowerCase().split('');
  return array.reduce((acc, val) => {
    val === char ? acc++ : acc;
    return acc;
  }, 0);
}
*/

// Solution 3: using a for loop without split
// function countChar(string, char) {
//   // Error and edge-case handling
//   if (!string || !char) return 0;
//   char = char.toLowerCase(); 
//   string = string.toLowerCase();
//   if (string === char) return 1;
//   if (!string.includes(char)) return 0;

//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === char) count++;
//   }
//   return count;
// }

// Solution 4: Using a for-loop and a hashtable
function countChar(string, char) {
  // Error and edge-case handling
  if (!string || !char) return 0;
  char = char.toLowerCase(); 
  string = string.toLowerCase();
  if (string === char) return 1;
  if (!string.includes(char)) return 0;

  let hashtable = new Hashmap(10);;
  for (let i = 0; i < string.length; i++) {
    hashtable.add(string[i], string[i]);
  }
  if (hashtable.contains(char)) {
    let hash = hashtable.hash(char);
    let current = hashtable.map[hash].head;
    if (!current.next) return {count: 1};
    else {
      let counter = 0;
      while (current.next) {
        if (Object.values(current.value)[0] === char) counter++;
        current = current.next;
      };
      return counter;
    };
  };
}


module.exports = countChar;

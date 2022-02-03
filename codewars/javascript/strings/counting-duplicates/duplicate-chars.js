'use strict';

function duplicateCount1(text) {
  if (!text) return 0;
  if (typeof text !== 'string') return 0;
  const lcString = text.toLowerCase();
  const map = new Map();
  let duplicateCount = 0;

  for (let i = 0; i < lcString.length; i++) {
    if (!map.get(lcString[i])) {
      map.set(lcString[i], 1);
    }
    else {
      let count = map.get(lcString[i]) + 1;
      map.set(lcString[i], count);
    }
  }
 
  map.forEach((value, key) => {
    if (value > 1) duplicateCount++;
  });
  
  return duplicateCount;
};

// Another codewarrior's solution: sorts the string and then creates an array consisting of matching strings, e.g., [ 'iiiiiii', 'ss' ], using regex and returns its length. Big O for space is 0 (or 1?) and for time is O(n) + O(n) + O(n log(n)) + O(n) + O(n) = O(n log(n)), the dominant term.
function duplicateCount2(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
module.exports = { duplicateCount1, duplicateCount2 };

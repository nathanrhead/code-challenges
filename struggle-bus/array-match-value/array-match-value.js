'use strict';

/* Solution 1:
This solution was posted on slack by John Pham, a member of Seattle JS Hackers. While elegant, its drawbacks lie in that it will return any entry that includes a keyword, even if that entry includes more than just that keyword, and that it returns all the instances of the keyword, assuming those things pose a problem.

- .flat() is a native JS method that transforms, or flattens, a nested array into a single array.
- .some() returns true when its condition is met.
- .includes() returns true if the value passed as an argument is in the array.
*/

const getMatchingRecords1 = (records, keywords) => records.flat().filter(record => keywords.some(keyword => record.toLowerCase().includes(keyword.toLowerCase())));

// Solution 2: This one returns an array of unique values.
const getMatchingRecords2 = (records, keywords) => {
  const flat = records.flat().filter(record => keywords.some(keyword => record.toLowerCase().includes(keyword.toLowerCase())));
  return flat.filter((val, idx) => flat.indexOf(val) === idx);
};

// Solution 3: Because .includes() and .indexOf() will return true when a string includes a keyword--e.g., 'housing' is included in 'housing for people with mental health issues'--the only thing I can think of to produce an array of exact matches in to either do a nested for-loop or a hashmap lookup. 
const getExactMatch1 = (keywords, filteredArray) => {
  let exactMatch = [];
  for (let i = 0; i < keywords.length; i++) {
    for (let j = 0; j < filteredArray.length; j++) {
      if (filteredArray[j].toLowerCase() === keywords[i].toLowerCase()) exactMatch.push(filteredArray[j]);
    };
  };
  return exactMatch;
}

// This helper function takes in an already filtered array an returns only unique matches, not repeated ones.
const getExactMatch2 = (keywords, filteredArray) => {
  let map = new Map();
  let unique = [];
  for (let i = 0; i < filteredArray.length; i++) {
    if (!map.has(filteredArray[i]))map.set(filteredArray[i], i);
  };
  for (let i = 0; i < keywords.length; i++) {
    if (map.has(keywords[i].toLowerCase())) unique.push(keywords[i]);
  };
  return unique;
}

module.exports = { getMatchingRecords1, getMatchingRecords2, getExactMatch1, getExactMatch2 };

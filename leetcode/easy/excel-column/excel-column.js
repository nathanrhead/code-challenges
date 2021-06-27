'use strict';

function spreadsheetColumn(int) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = '';
  let target = int;
  while (target / 26 > 0) {
    if (target % 26 > 0) result = alphabet[target % 26 - 1] + result;      
    else result = 'Z' + result;
    target = Math.ceil((target / 26) - 1);
  };
  // console.log({result});
  return result;
}

module.exports = spreadsheetColumn;

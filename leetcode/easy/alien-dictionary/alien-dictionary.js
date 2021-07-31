'use strict';

const isAlienSorted = (words, order) => {
  let map = new Map();
  for (let i = 0; i < order.length; i++) {
    map.set(order[i], i);
  }

  for (i = 0; i < words.length - 1; i++) {
    let minWordLength = Math.min(words[i].length, words[i + 1].length);
    for (let j = 0; j < minWordLength; j++) {
      if (
        words[i][j] !== words[i + 1][j] && map.get(words[i][j]) > map.get(words[i + 1][j]) ||
        words[i][j] === words[i + 1][j] && j === minWordLength - 1 && words[i].length > words[i + 1].length
      )
        return false;
      else if (words[i][j] !== words[i + 1][j])
        break;
    }
  }
  return true;
};
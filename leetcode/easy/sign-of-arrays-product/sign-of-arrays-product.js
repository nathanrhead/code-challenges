'use strict';

// This is my solution, but it is faster only than 6.63% of leetcode submissions and smaller only than 46.06%. 
const arraySign = nums => {
    let product = nums.reduce((acc, val, idx) => {
      return acc = acc * val;
    }, 1);
    return signFunc(product);
};

const signFunc = x => {
  if (x > 0) return 1;
  else if (x < 0) return -1
  else return 0
};

module.exports = arraySign;

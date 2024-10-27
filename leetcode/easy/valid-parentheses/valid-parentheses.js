'use strict';

/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = s => {
  // Use stacks to track in and out.
  const stack = [];
  const bracketPairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const char of s) {
    // Push opening brackets onto the top of the stack.
    if (char === '(' || char === '{' || char === '[') stack.push(char);
    
    // If the closing bracket matches the last opening bracket, pop it off the stack.
    else      
      if (!stack.length || stack.pop() !== bracketPairs[char]) return false;
  }

  return stack.length <= 0 ? true : false;
};

module.exports = isValid;

'use strict';

/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = s => {  
  // Use stacks to track in and out.
  const stack = [];

  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') { // Handle opening brackets.
          // Push opening brackets onto the top of the stack.
          stack.push(s[i]);
      } else { // Hanle closing brakcets.
          // If the closing bracket matches the last opening bracket, pop it off the stack.
          if (s[i] === ')') {
              if (stack[stack.length-1] === '(') stack.pop();
              else return false;
          } else if (s[i] === '}') {
              if (stack[stack.length-1] === '{') stack.pop();
              else return false;
          } else if (s[i] === ']') {
              if (stack[stack.length-1] === '[') stack.pop();
              else return false;
          }
      }
  }

  return stack.length <= 0 ? true : false;
};

module.exports = isValid;

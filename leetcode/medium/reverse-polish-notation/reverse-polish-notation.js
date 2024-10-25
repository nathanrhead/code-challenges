/**
 * @param {string[]} tokens
 * @return {number}
*/

const evalRPN = function(tokens) {
  const stack = [];

  tokens.forEach(token => {
      const operand = Number(token);

      if (!isNaN(operand)) stack.push(operand);
      else {
          const ultimate = stack.pop();
          const penultimate = stack.pop();

          switch(token) {
              case '+':
                  result = penultimate + ultimate;
                  break;
              case '-':
                  result = penultimate - ultimate;
                  break;
              case '*':
                  result = penultimate * ultimate;
                  break;
              case '/':
                  result = Math.trunc(penultimate / ultimate);
                  break;
          }

          stack.push(result);
      }
  });

  return stack.pop();
};

module.exports = evalRPN;

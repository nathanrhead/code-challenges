'use strict';

function modifyString(s) {
  if (!s.includes('?')) return s;
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '?') answer += s[i];
    else {
      if (answer[i-1] !== 'a' && s[i+1] !== 'a') answer += 'a';
      else if (answer[i-1] !== 'b' && s[i+1] !== 'b') answer += 'b';
      else if (answer[i-1] !== 'c' && s[i+1] !== 'c') answer += 'c';
    }
  };
  return answer;
}

module.exports = modifyString;

'use strict';

const modifyString = require('./replace-question-marks');

describe ('leetcode challenge 1576 to replace all ?s with letters, ensuring no repeating contiguous letters', () => {

  it ('returns \'a\' when passed a single \'?\'', () => {
    const string = '?';
    expect(modifyString(string)).toEqual('a');
  });

  it ('returns the unmodified argument when the argument contains no question marks', () => {
    const string = 'abcdefg';
    expect(modifyString(string)).toEqual('abcdefg');
  });

  it ('returns a new string wihtout any question marks or repeated continguous characters', () => {
    const string1 = 'ubv?w';
    const string2 = 'j?qg??b';
    const string3 = '??yw?ipkj?';
    const string4 = 'a?c';
    const string5 = 'd?a';
    const string6 = 'b?c';
    const string7 = '??a';
    const string8 = 'b?a';
    const string9 = '?a?ub???w?b';
  
    expect(modifyString(string1)).toEqual('ubvaw');
    expect(modifyString(string2)).toEqual('jaqgacb');
    expect(modifyString(string3)).toEqual('abywaipkja');
    expect(modifyString(string4)).toEqual('abc');
    expect(modifyString(string5)).toEqual('dba');
    expect(modifyString(string6)).toEqual('bac');
    expect(modifyString(string7)).toEqual('aba');
    expect(modifyString(string8)).toEqual('bca');
    expect(modifyString(string9)).toEqual('babubabawab');
  });
})

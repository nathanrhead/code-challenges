'use strict';

const Trie = require('./trie-class');

describe ('LeetCode challenge to implement a trie class', () => {
  const trie = new Trie();

  it ('instantiates a new trie instance', () => {
    expect(trie.root.isEndOfWord).toBeFalsy();
  });

  it ('inserts a word', () => {
    trie.insert('apple');    
    expect(trie.root).not.toEqual({});
  });

  it ('returns true if a word exists and false if it doesn\'t', () => {
    expect(trie.search('apple')).toBeTruthy();
    expect(trie.search('app')).toBeFalsy();
  });

  it ('returns true if a word starts with the input and false if it does not', () => {
    expect(trie.startsWith('app')).toBeTruthy();
    expect(trie.startsWith('bar')).toBeFalsy();
  });

  it ('traverses the trie, logging each word in the trie', () => {
    trie.insert('aardvark');
    expect(trie.traverseDFS()).toEqual(['apple', 'aardvark']);
  });
});

const Trie = function() {
  this.root = {}; // Root node of the Trie
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let node = this.root;

  // Loop through each character of the word.
  for (const char of word) {
    // If the character is not in the current node, create a new object for it.
    if (!node[char]) node[char] = {};

    // Move to the child node.
    node = node[char]; 
  }

  // Mark the end of the word.
  node.isEndOfWord = true; 
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let node = this.root;

  for (const char of word) {
    // If character is not found, return false
    if (!node[char]) return false; 

    // Move to the child node.
    node = node[char]; 
  }

  // Check if it's the end of the word.
  return node.isEndOfWord === true; 
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let node = this.root;

  for (const char of prefix) {
    // If character is not found, return false.
    if (!node[char]) return false;

    // Move to the child node.
    node = node[char]; 
  }

  // Prefix is found.
  return true; 
};

Trie.prototype.traverseDFS = function(node = this.root, prefix = '', words = []) {
  // If the current node marks the end of a word, add it to the list.
  if (node.isEndOfWord) words.push(prefix);

  // Recursively traverse each child node.
  for (const char in node) {
      if (char !== 'isEndOfWord') { // Avoid the isEndOfWord flag.
          this.traverseDFS(node[char], prefix + char, words);
      }
  }

  return words;
};

module.exports = Trie;

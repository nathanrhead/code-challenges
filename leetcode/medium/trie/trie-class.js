class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children.has(char)) node.children.set(char, new TrieNode());
      
      node = node.children.get(char);
    }

    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children.has(char)) return false;
      
      node = node.children.get(char);
    }

    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;

    for (let char of prefix) {
      if (!node.children.get(char)) return false;

      node = node.children.get(char);
    }

    return true;
  }

  traverseDFS(node = this.root, prefix = '', words = []) {
    if (node.isEndOfWord) words.push(prefix);

    for (const [char, childNode] of node.children) {
      if (!node.isEndOfWord) this.traverseDFS(childNode, prefix + char, words);
    }

    return words;
  }
}

module.exports = Trie;

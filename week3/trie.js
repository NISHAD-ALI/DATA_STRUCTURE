class TrieNode {
  constructor() {
    this.children = {};
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
      node.children[char] = node.children[char] || new TrieNode();
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }

  delete(word) {
    this.deleteRecursive(this.root, word, 0);
  }

  deleteRecursive(node, word, index) {
    if (!node) return node;

    if (index === word.length) {
      if (node.isEndOfWord) node.isEndOfWord = false;
      if (Object.keys(node.children).length === 0) node = null;
      return node;
    }

    const char = word[index];
    node.children[char] = this.deleteRecursive(node.children[char], word, index + 1);

    if (Object.keys(node.children).length === 0 && !node.isEndOfWord) node = null;

    return node;
  }
}

// Example Usage:
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: false
console.log(trie.startsWith("app")); // Output: true
trie.insert("app");
console.log(trie.search("app")); // Output: true
trie.delete("app");
console.log(trie.search("app")); // Output: false

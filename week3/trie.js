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
    this.root = this.deleteRecursive(this.root, word, 0);
  }
  
  deleteRecursive(node, word, index) {
    if (!node) return null;
  
    if (index === word.length) {
      node.isEndOfWord = false;
      if (Object.keys(node.children).length === 0) return null;
    } else {
      const char = word[index];
      node.children[char] = this.deleteRecursive(node.children[char], word, index + 1);
  
      if (Object.keys(node.children).length === 0 && !node.isEndOfWord) return null;
    }
  
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








printWordsWithPrefix(prefix) {
  let node = this.root;

  for (let char of prefix) {
    if (!node.children[char]) return console.log(`No words found with prefix '${prefix}'`);
    node = node.children[char];
  }

  this.printWords(node, prefix);
}

printWords(node, currentWord) {
  if (node.isEndOfWord) console.log(currentWord);

  for (let char in node.children) {
    this.printWords(node.children[char], currentWord + char);
  }
}
}

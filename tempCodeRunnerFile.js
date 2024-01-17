class TrieNode{
    constructor(){
        this.children = {}
        this.iswordEnd = false
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let node = this.root
        for(let char of word){
            node.children[char] = node.children[char] || new TrieNode
            node = node.children[char]
        }
        node.iswordEnd = true
    }
    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]) return false
            node = node.children[char]
        }
        return node.iswordEnd
    }
    startsWith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]) return false
            node = node.children[char]
        }
        return true
    }
    delete(word){
        this.root = this.deleteRecursion(this.root,word,0)
    }
    deleteRecursion(node,word,index){
        if(!node) return null
        if(index === word.length){
            if(Object.keys(node.children).length === 0)return null
            node.iswordEnd = true
        }else{
            const char = word[index]
            node.children[char] = this.deleteRecursion(node.children[char],word,index+1)
            if(Object.keys(node.children).length === 0 && !node.iswordEnd)return null
        }
        return node
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

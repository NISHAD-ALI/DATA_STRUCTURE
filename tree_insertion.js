class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
 
 }
 insertNode(root,newNode){
    if(newNode.value < root.value){
        if(root.left === null){
            root.left = newNode
        }else{
            this.insertNode(root.left,newNode)
        }
    }else{
        if(root.right === null){
            root.right = newNode
        }else{
            this.insertNode(root.right,newNode)
        }
    }
 }
 search(root,value){
    if(!root){
        return false
    }else{
        if(root.value === value){
            return true
        }else if(value < root.value){
           return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }
 }   
}

const newBST = new BST()
newBST.insert(10)
newBST.insert(33)
console.log(newBST.search(newBST.root,10));
console.log(newBST.search(newBST.root,11));
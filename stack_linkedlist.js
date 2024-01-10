class Node{
    constructor(value){
        this.value = value
        this.next = null
    }

}
class LinkedList {
    constructor(){
        this.top = null
        this.size = 0
    }
    getsize(){
        return this.size
    }
    isEmpty(){
        return this.size === 0
    }
    push(element){
        const node = new Node(element)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        if(this.isEmpty()){
            this.top = node
        }else{
            node.next = this.top
            this.top = node
        }
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            console.log("empty");
        }else{
            this.top = this.top.next
            this.size--
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("no data");
        }
        let current = this.top
        let newVal = ''
        while(current){
             newVal += `${current.value}`
             current = current.next
        }
        console.log(newVal);
    }
}


const stack = new LinkedList()
stack.push(19)

stack.push(11)
stack.push(77)
stack.print()
stack.pop()
stack.pop()
stack.pop()
stack.print()
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size === 0
    }
    preppend(value){
        const node = new Node(value)
        if(this.isEmpty()){
             this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let pre = this.head
            while(pre.next){
                pre = pre.next
            }
            pre.next = node
        }
        this.size++
    }
    remove(value){
        if(this.isEmpty()){
            console.log("empty");
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
        }
        let current = this.head
        let previous = null
        while(current){
            previous = current
            current = current.next
        }
        previous = current.next
        this.size--
    }
    print(){
        if(this.isEmpty()){
            console.log("empty");
        }else{
            let current = this.head
            let newValues = ''
            while(current){
                newValues += `${current.value}`
                current = current.next
            }
            console.log(newValues);
        }
    }
}

const list = new LinkedList()
list.preppend(10)
list.print()
list.append(11)
list.print()
list.append(55)
list.print()
list.preppend(14)
list.print()
class Node{
    constructor(value){
        this.value = value
        this.next = null 
    }
}
class LinkedList{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    enqueue(element){
        const node = new Node(element)
        if(this.isEmpty()){
            this.front = node
            this.rear = node
        }else{
            this.rear.next = node
            this.rear = node
        }
        this.size++

    }
    dequeue(){
        if(this.isEmpty()){
            console.log('empty');
            
        }else{
            this.front = this.front.next
            this.size--
        }
    }
    print(){
        if(this.isEmpty()){
            console.log('empty');
            
        }
        let current = this.front
        let newVal = ''
        while(current){
            newVal += `${current.value}`
            current = current.next
        }
        console.log(newVal);
    }
}
const queue = new LinkedList()
queue.enqueue(10)
queue.enqueue(30)
queue.print()
queue.dequeue()
queue.print()
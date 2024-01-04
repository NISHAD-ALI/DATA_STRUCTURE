class Queue{
    constructor(){
        this.items = []
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        this.items.shift()
    }
    isEmpty(){
        return this.items.length === 0
    }
    peek(){
        if(this.isEmpty()){
            console.log("empty");
        }
        return this.items[0]
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
}

const q = new Queue

q.enqueue(8)
q.print()
q.enqueue(4)
q.dequeue()
q.print()
console.log(q.peek());
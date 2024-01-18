class HashMap{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i = 0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }    
    set(key,value){
       let index = this.hash(key)
       while(this.table[index]){
        index = (index+1)%this.size
       }
       this.table[index] = {key,value}
    }
    get(key){
        let index = this.hash(key)
        while(this.table[index]){
           if(this.table[index].key === key){
            return this.table[index].value
        }
        index = (index+1)%this.size
    }
    return undefined
}
remove(key){
    let index = this.hash(key)
    while(this.table[index]){
        if(this.table[index].key === key){
            this.table[index ]= undefined
            break;
        }
        index = (index+1)%this.size
    }
}
    print(){
      for(let i=0;i<this.table.length;i++){
        console.log(i,this.table[i]);
      }
    }
}

const tab = new HashMap(10)
tab.set("name","nishad")  
tab.set("age",7)
tab.set("mane","ali")
tab.print()
console.log("----");
tab.remove("name")
tab.print() 
console.log(tab.get("mane"))
print(){
    for(let vertex in this.adjacencyList){
        console.log(vertex+"->"+[...this.adjacencyList[vertex]]);
    }
}
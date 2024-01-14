
class Graph{
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex])
    this.adjacencyList[vertex] = new Set()
  }
  addEdge(vertex1,vertex2){
    if(!this.adjacencyList[vertex1]){
    this.adjacencyList[vertex1]
    }
  
  if(!this.adjacencyList[vertex2]){
    this.adjacencyList[vertex2]
  }
  this.adjacencyList[vertex1].add(vertex2)
  this.adjacencyList[vertex2].add(vertex1)
}
removeEdge(vertex1,vertex2){
  this.adjacencyList[vertex1].delete(vertex2)
  this.adjacencyList[vertex2].delete(vertex1)
}

removeVertex(vertex){
  if(!this.adjacencyList[vertex]){
    return
  }
  for(let vertice of this.adjacencyList[vertex]){
    this.removeEdge(vertex,vertice)
  }
  delete this.adjacencyList[vertex]
}
dfs(startVertex){
  let visited = {}
  const dfsRecursive = (vertex) =>{
    if(!vertex) return
    visited[vertex]  = true
    console.log(vertex);
    for(let neighbor of this.adjacencyList[vertex]){
      if(!visited[neighbor]){
        dfsRecursive(neighbor)
      }
    }
    

  }
  dfsRecursive(startVertex)
}

bfs(startVertex) {
  const queue = [];
  const visited = {};
  queue.push(startVertex);
  visited[startVertex] = true;
  while (queue.length > 0) {
    const currentVertex = queue.shift();
    console.log(currentVertex);
    for (let neighbor of this.adjacencyList[currentVertex]) {
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
      }
    }
  }
}

print(){
  for(let vertex in this.adjacencyList){
    console.log(vertex + "->"+[...this.adjacencyList[vertex]]);
  }
}

}


const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("A","D")
graph.dfs("A")
console.log("-----");
graph.bfs("A")
graph.print()

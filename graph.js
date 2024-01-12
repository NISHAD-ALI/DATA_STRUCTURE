class Graph {
    constructor() {
      this.vertices = new Map();
    }
  
    addVertex(vertex) {
      if (!this.vertices.has(vertex)) {
        this.vertices.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.addVertex(vertex1);
      this.addVertex(vertex2);
  
      this.vertices.get(vertex1).push(vertex2);
      this.vertices.get(vertex2).push(vertex1);
    }
  
    getNeighbors(vertex) {
      if (this.vertices.has(vertex)) {
        return this.vertices.get(vertex);
      }
      return null;
    }
  
    printGraph() {
      for (let [vertex, neighbors] of this.vertices) {
        console.log(`${vertex} -> ${neighbors.join(', ')}`);
      }
    }
  }
  
  // Example Usage:
  const graph = new Graph();
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'D');
  graph.addEdge('D', 'E');
  
  graph.printGraph();
  



// The Graph class has a vertices property, which is a map 
// where each vertex is associated with an array of its neighbors.
// The addVertex method adds a new vertex to the graph.
// The addEdge method adds an undirected edge between two vertices.
// The getNeighbors method returns an array of neighbors for a given vertex.
// The printGraph method prints the graph by iterating over each vertex and its neighbors.
// This is a basic implementation of an undirected graph using an adjacency list. Depending on your needs,
//  you might extend it to support weighted edges, directed edges, or other graph-related functionalities.
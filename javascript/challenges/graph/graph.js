'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();

  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  // alternate
  // addVertex(value){
  //   const vertex = new Vertex(value);
  //   this.adjacencyList.set(vertex, []);
  // }

  // this only handles one direction of edge
  addEdge(startVertex, endVertex, weight = 0) {

    const edges = this.adjacencyList.get(startVertex);
    const edge = new Edge(endVertex, weight);
    edges.push(edge);

  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }
  getNodes() {
    return this.adjacencyList;
  }
  size() {
    return this.nodes.length;
  }
}

module.exports = {
  Node,
  Graph
}


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
}

function getEdges(graph, airports) {

  let isPossible = true;
  let cost = 0;

  for (let i = 0; i < airports.length - 1; i++) {
    const airport = airports[i];
    const destination = airports[i + 1];

    const directConnections = graph.getNeighbors(airport);
    let directFlight = false;
    for (let connection of directConnections) {
      if (connection.vertex === destination) {
        directFlight = true;
        cost += connection.weight;
        break;
      }
    }
    if (!directFound) {
      isPossible = false;
      cost = 0;
      break;
    }
  }
  return {
    isPossible,
    cost,
  };
}

module.exports = { Graph, Edge, Vertex, getEdges }
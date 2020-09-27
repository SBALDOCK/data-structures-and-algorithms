'use strict';

class Edge {
  constructor(source, destination, weight) {
    this.source = source;
    this.destination = destination;
    this.weight = weight;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = [];
  }
}

class Graph {
  constructor() {
    this.AdjList = [];
    this.edges = [];
  }

  // Adds a new node
  // Takes in value of node
  // Returns added node
  addNode(node) {
    const newNode = new Node();
    this.AdjList.push(node)
    return newNode;
  }

  // adds edge between two nodes
  // includes weight
  // Takes in two nodes connected by edge
  addEdge(node1, node2, weight = null) {

    node1.adjacents.push(node2);
    node2.adjacents.push(node1);

    const edge = new Edge(node1, node2, weight);

    this.edges.push(edge);
  }

  // returns all nodes in the graph as a collection
  getNodes() {
    return this.AdjList;
  }


  // Return collection of edges connected to a given node
  // Takes in a given node
  // Include weight of the connection
  getNeighbors(node) {

    const edgeCollection = [];

    this.edges.forEach(edge => {
      if (edge.source === node.value) {
        edgeCollection.push(edge);
      }
    })
    return edgeCollection;

  };

  size() {
    return this.AdjList.length;
  }
}

module.exports = {
  Edge,
  Node,
  Graph
}

'use strict';

const { Graph } = require('../graph/graph.js');
const { Queue } = require('../stacksAndQueues/stacks-and-queues');

class breadthFirstGraph extends Graph {
  constructor() {
    super()
  }

  breadthFirst(start) {
    const graph = new Set();
    let queue = new Queue();
    let visited = [];
    queue.enqueue(start);

    while (queue.length) {
      let front = queue.dequeue();
      visited.push(start.value);
      graph.add(front);
      this.edges[front.value].forEach(vertex => {
        console.log('vertex: ', vertex);
        if (!visited.includes(vertex)) {
          visited.push(vertex.value);
          queue.enqueue(vertex);
        }
      });

    }
    return visited;
  }

}

module.exports = breadthFirstGraph;


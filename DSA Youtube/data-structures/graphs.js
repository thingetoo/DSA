const Stack = require('./stack')

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (this.adjacencyList[vertex]) return;
        this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(items => items !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(items => items !== v1)
    }

    removeVertex(vertex) {
        const toRemove = this.adjacencyList[vertex];

        for (let i = 0; i < toRemove.length; i++) {
            this.removeEdge(vertex, toRemove[i]);
        }

        delete this.adjacencyList[vertex];
    }

    DFS_Recursive(vertex) {
        const results = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        function DFS(vertex) {
            if (!vertex) return;

            results.push(vertex);
            visited[vertex] = true;

            const neighbors = adjacencyList[vertex];

            for (let i = 0; i < neighbors.length; i++) {
                if (!visited[neighbors[i]]) {
                    DFS(neighbors[i])
                }
            }
        }
        DFS(vertex);

        return results;
    }

    DFS_Iterative(vertex) {
        let s = new Stack();
        const discovered = {};
        const result = [];
        s.push(vertex);
        discovered[vertex] = true;

        while (s.size) {
            const current = s.pop();
            result.push(current);
            
            const neighbors = this.adjacencyList[current];
            
            for (let i = 0; i < neighbors.length; i++) {
                if (!discovered[neighbors[i]]) {
                    discovered[neighbors[i]] = true;
                    s.push(neighbors[i]);
                }
            }
        }

        return result;
    }

    BFS(vertex) {
        let queue = [vertex];

        const results = [];
        const visited = {};

        visited[vertex] = true;

        while (queue.length) {
            const current = queue.shift();
            results.push(current);

            const neighbors = this.adjacencyList[current];

            for (let i = 0; i < neighbors.length; i++) {
                if (!visited[neighbors[i]]) {
                    visited[neighbors[i]] = true;
                    queue.push(neighbors[i]);
                }
            }
        }
        return results;
    }
}

const graph = new Graph();

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.DFS_Recursive('A'))
console.log(graph.DFS_Iterative('A'))
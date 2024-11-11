class WeightedGraph { // storing the node and the weight
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];


    }

    addEdge(vertex1, vertex2, weight) {
        const value1 = this.adjacencyList[vertex1];

        const value2 = this.adjacencyList[vertex2];

        value1.push({
            node: vertex2,
            weight
        });
        value2.push({
            node: vertex1,
            weight
        });
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({
            val,
            priority
        });

        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}


const wg = new WeightedGraph();

wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');
wg.addVertex('D');
wg.addVertex('E');
wg.addVertex('F');

wg.addEdge('A', 'B', 4);
wg.addEdge('A', 'C', 2);
wg.addEdge('D', 'C', 2);
wg.addEdge('F', 'C', 4);
wg.addEdge('F', 'E', 1);
wg.addEdge('B', 'E', 3);
wg.addEdge('D', 'E', 3);
wg.addEdge('D', 'F', 1);

console.log(wg)
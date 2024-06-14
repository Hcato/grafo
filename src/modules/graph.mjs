import Metro from "./metro.mjs";

export default class Graph {
    constructor() {
        this.nodes = new Map();
        this.adjacencyMatrix = [];
    }

    addNode(value) {
        const metro = new Metro(value);
        this.nodes.set(value, metro);
        const newSize = this.nodes.size;
        for (let i = 0; i < this.adjacencyMatrix.length; i++) {
            this.adjacencyMatrix[i].push(0);
        }
        this.adjacencyMatrix.push(new Array(newSize).fill(0));
    }

    addEdge(startValue, endValue) {
        const startNode = this.nodes.get(startValue);
        const endNode = this.nodes.get(endValue);
        if (startNode && endNode) {
            startNode.addEdge(endNode);

            const startIndex = [...this.nodes.keys()].indexOf(startValue);
            const endIndex = [...this.nodes.keys()].indexOf(endValue);
            if (startIndex !== -1 && endIndex !== -1) {
                this.adjacencyMatrix[startIndex][endIndex] = 1;
            }
        }
    }

    bfs(callback) {
        const queue = [];
        const visited = new Array(this.adjacencyMatrix.length).fill(false);
        const entries = [...this.nodes.entries()];
        const [startVertex] = entries[0];
        const startIndex = entries.findIndex(([key]) => key === startVertex);
        
        queue.push(startIndex);
        visited[startIndex] = true;
        
        while (queue.length > 0) {
            const currentIndex = queue.shift();
            const currentVertex = entries[currentIndex][0];
            callback(currentVertex);
            
            for (let i = 0; i < this.adjacencyMatrix[currentIndex].length; i++) {
                if (this.adjacencyMatrix[currentIndex][i] && !visited[i]) {
                    visited[i] = true;
                    queue.push(i);
                }
            }
        }
    }

    dfs(callback) {
        const stack = [];
        const visited = new Set();
        const entries = [...this.nodes.entries()];
        const [startVertex] = entries[0];
        const startIndex = entries.findIndex(([key]) => key === startVertex);
    
        stack.push(startIndex);
        
        while (stack.length > 0) {
            const currentIndex = stack.pop();
            const currentVertex = entries[currentIndex][0];
            if (!visited.has(currentIndex)) { 
                visited.add(currentIndex);
                callback(currentVertex);
                
                for (let i = this.adjacencyMatrix[currentIndex].length - 1; i >= 0; i--) {
                    if (this.adjacencyMatrix[currentIndex][i] && !visited.has(i)) {
                        stack.push(i);
                    }
                }
            }
        }
    }
}

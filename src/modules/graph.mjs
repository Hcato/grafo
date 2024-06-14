import Metro from '../modules/Metro.mjs';

export default class Graph {
    constructor() {
        this.nodes = new Map();
    }

    addNode(value) {
        const metro = new Metro(value);
        this.nodes.set(value, metro);
    }

    addEdge(startValue, endValue) {
        const startNode = this.nodes.get(startValue);
        const endNode = this.nodes.get(endValue);
        if (startNode && endNode) {
            startNode.addEdge(endNode);
        }
    }

    show() {
        this.nodes.forEach((node, key) => {
            console.log(`Metro: ${key}`);
            console.log('Connections:');
            node.getConnections().printList();
        });
    }
    recorrido(startValue) {
        const startNode = this.nodes.get(startValue);
        if (!startNode) {
            console.error(`No node found with value: ${startValue}`);
            return;
        }
        const visited = new Set();
        const result = [];
        this.this.#callback(startNode, visited, result);
        return result;
    }
    #callback(node, visited, result) {
        visited.add(node);
        result.push(node.getValue());
        const connections = node.getConnections();
        let current = connections.getHead();
        while (current) {
            if (!visited.has(current)) {
                this.this.#callback(current, visited, result);
            }
            current = current.conex;
        }
    }
}
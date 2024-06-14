import LinkedList from './LinkedList.mjs';

export default class Metro {
    #value;

    constructor(value) {
        this.#value = value;
        this.conex = new LinkedList();
    }

    addEdge(metro) {
        this.conex.push(metro);
    }

    getValue() {
        return this.#value;
    }

    getConnections() {
        return this.conex;
    }
}
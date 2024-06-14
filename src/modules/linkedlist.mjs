import Metro from "./metro.mjs";

export default class LinkedList {
    #head;
    #count;

    constructor() {
        this.#head = null;
        this.#count = 0;
    }

    push(metro) {
        if (!(metro instanceof Metro)) {
            throw new Error('Node must be an instance of Metro');
        }
        if (!this.#head) {
            this.#head = metro;
        } else {
            let current = this.#head;
            while (current.conex) {
                current = current.conex;
            }
            current.conex = metro;
        }
        this.#count++;
    }

    printList() {
        let current = this.#head;
        while (current) {
            console.log(current.getValue());
            current = current.conex;
        }
    }

    size() {
        return this.#count;
    }

    getElementAt(index) {
        if (index >= 0 && index < this.#count) {
            let node = this.#head;
            for (let i = 0; i < index; i++) {
                node = node.conex;
            }
            return node;
        }
        return null;
    }

    getHead() {
        return this.#head;
    }
}



import Metro from './Metro.mjs';

export default class LinkedList {
    #head;
    #count;

    constructor() {
        this.#head = null;
        this.#count = 0;
    }

    push(metro) {
        if (!this.#head) {
            this.#head = metro;
        } else {
            let current = this.#head;
            while (current.conex.#head) {
                current = current.conex.#head;
            }
            current.conex.#head = metro;
        }
        this.#count++; 
    }

    printList() {
        let current = this.#head;
        while (current) {
            console.log(current.getValue());
            current = current.conex.#head;
        }
    }

    size() {
        return this.#count;
    }

    getElementAt(index) {
        if (index >= 0 && index < this.#count) {
            let node = this.#head;
            for (let i = 0; i < index; i++) {
                node = node.conex.#head;
            }
            return node;
        }
        return null;
    }
    getHead() {
        return this.#head;
    }
}

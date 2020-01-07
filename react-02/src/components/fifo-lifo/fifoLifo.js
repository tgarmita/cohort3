export class Queue {
    constructor() {
        this.queue =[];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        this.queue.shift();
    }
}

export class Stack {
    constructor() {
        this.stack =[];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        this.stack.pop();
    }
}



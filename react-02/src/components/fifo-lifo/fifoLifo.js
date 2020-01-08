export class Queue {
    constructor() {
        this.queue = [];
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
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        this.stack.pop();
    }
}

export class BagController {
    constructor() {
        this.shapes = ["s", "z", "j", "l", "t", "i", "o"];
        this.bag = this.shuffleArray(this.shapes);
    }

    /*Based on Durstenfeld shuffle*/
    shuffleArray (array) {
        let array2 = [];
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array2[i], array2[j]] = [array[j], array[i]];
        }
        return array2;
    }

    pull() {
        if (this.bag.length === 0) {
            this.bag = this.shuffleArray(this.shapes);
        }
        return this.bag.pop();
    }
}





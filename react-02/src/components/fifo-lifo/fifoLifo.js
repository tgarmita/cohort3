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
        /*Tetris shapes by DevinCook [Public domain]*/
        this.shapes = [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Tetris_I.svg/32px-Tetris_I.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tetris_T.svg/32px-Tetris_T.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tetris_S.svg/32px-Tetris_S.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tetris_Z.svg/32px-Tetris_Z.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tetris_J.svg/32px-Tetris_J.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Tetris_L.svg/32px-Tetris_L.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Tetris_O.svg/32px-Tetris_O.svg.png"];
        this.bag = this.shuffleArray(this.shapes);
    }

    /*Based on Durstenfeld shuffle*/
    shuffleArray(array) {
        let array2 = array.slice();
        for (let i = 6; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array2[i], array2[j]] = [array2[j], array2[i]];
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





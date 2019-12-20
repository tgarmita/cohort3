export class ListNode {
    constructor(subject, amount, forwardNode = null) {
        this.subject = subject;
        this.amount = amount;
        this.forwardNode = forwardNode;
    }

    show() {
        return `Subject: ${this.subject}, Amount: ${this.amount}`
    }
}


export class LinkedList {
    constructor() {
        this.head = null;
        this.position = null;
    }

    first() {
        this.position = this.head;
    }

    last() {
        while (this.position.forwardNode) {
            this.next();
        }
    }

    next() {
        if (this.position.forwardNode) {
            this.position = this.position.forwardNode;
        }
    }

    previous() {
        let previousNode = this.head;
        while (this.position !== this.head && previousNode.forwardNode !== this.position) {
            previousNode = previousNode.forwardNode;
        }
        this.position = previousNode;
    }

    insert(subject, amount) {
        if (!this.head) {
            this.head = new ListNode(subject, amount)
            this.position = this.head;
        } else {
            const newNode = new ListNode(subject, amount);
            newNode.forwardNode = this.position.forwardNode;
            this.position.forwardNode = newNode;
            this.position = newNode;
        }
    }

    delete() {
        if (this.position === this.head) {
            this.head = this.head.forwardNode;
            this.position = this.head;
        } else {
            this.previous();
            this.position.forwardNode = this.position.forwardNode.forwardNode;
        }
    }

    totalAmounts() {
        let total = 0;
        let node = this.head;
        while (node) {
            total += node.amount;
            node = node.forwardNode;
        }
        return total;
    }
}

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
        this.position = this.position.forwardNode;
    }

    previous() {
        let previousNode = this.head;

        while (this.position !== this.head && previousNode.forwardNode !== this.position) {
            previousNode = previousNode.forwardNode;
        }
        this.position = previousNode;
    }

    //changes position to added node
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
        //deletes head -changes head and position to next node
        if (this.position === this.head) {
            this.head = this.head.forwardNode;
            this.position = this.head;
           
        //delete current - changes position to previous node
        } else {
            this.previous();
            this.position.forwardNode = this.position.forwardNode.forwardNode;
        }
    }
}

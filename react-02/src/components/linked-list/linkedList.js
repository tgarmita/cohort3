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

// first ⇒ position to the first node
// last ⇒ position to the last node
// next ⇒ move to the next node
// previous ⇒ backup one node (how are we going to do this?)
// insert ⇒ inserts a new node after the current node (which node will be the current node after the insertion?)
// delete ⇒ delete the current node (which node will be the current node after the deletion?)


export class LinkedList {
    constructor() {
        this.head = null;
        this.position = null;
    }

    //currently does not change position except for assigning to first node
    insert(subject, amount) {
        if (!this.head) {
            this.head = new ListNode(subject, amount)
            this.position = this.head; //Probably remove but need for now
        } else {
            const newNode = new ListNode(subject, amount);
            newNode.forwardNode = this.position.forwardNode;
            this.position.forwardNode = newNode;
            //need to return anything?
        }
    }
}

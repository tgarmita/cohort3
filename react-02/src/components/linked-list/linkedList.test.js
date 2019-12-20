import {ListNode, LinkedList } from './linkedList.js'

test('ListNode.show() returns subject and amount', () => {
    let node = new ListNode("Marsha", 39);

    expect(node.show()).toEqual("Subject: Marsha, Amount: 39");
});


test('insert() inserts node after current node and updates position to new node', () => {
    let list = new LinkedList();

    list.insert("Marsha", 39);

    expect(list.head.subject).toEqual("Marsha");
    expect(list.position.forwardNode).toEqual(null);

    list.insert("Dave", 43);

    expect(list.head.subject).toEqual("Marsha");
    expect(list.position.subject).toEqual("Dave");
    expect(list.position.forwardNode).toEqual(null);
});

test('first() moves position to first node', () => {
    let list = new LinkedList();
    list.insert("Marsha", 39);
    list.insert("Dave", 43);

    list.first();

    expect(list.position.subject).toEqual("Marsha");
});

test('last() moves position to last node', () => {
    let list = new LinkedList();
    list.insert("Marsha", 39);
    list.insert("Dave", 43);
    list.insert("Alex", 28);

    list.last()

    expect(list.position.subject).toEqual("Alex");
    expect(list.position.forwardNode).toEqual(null);
});

test('next() moves position to next node', () => {
    let list = new LinkedList();
    list.insert("Marsha", 39);
    list.insert("Dave", 43);
    list.insert("Alex", 28);

    list.first();
    list.next();

    expect(list.position.subject).toEqual("Dave");
});

test('previous() moves position to previous node', () => {
    let list = new LinkedList();
    list.insert("Marsha", 39);
    list.insert("Dave", 43);
    list.insert("Alex", 28);

    list.previous();

    expect(list.position.subject).toEqual("Dave");
});

test('delete() deletes node at the current position, and moves current position to the previous node', () => {
    let list = new LinkedList();
    list.insert("Marsha", 39);
    list.insert("Dave", 43);
    list.insert("Alex", 28);

    list.previous();
    list.delete();
    expect(list.position.subject).toEqual("Marsha");
    expect(list.position.forwardNode.subject).toEqual("Alex");
});

test('totalAmounts() moves position to previous node', () => {
    let list = new LinkedList();
    list.insert("Marsha", 39);
    list.insert("Dave", 43);
    list.insert("Alex", 28);

    expect(list.totalAmounts()).toEqual(110);
});


test('methods work together in various conditions', () => {
    let list = new LinkedList();
    list.insert("Marsha", 39);
    list.insert("Dave", 43);
    list.insert("Alex", 28);

    list.last();
    list.next();

    expect(list.position.subject).toEqual("Alex");

    list.insert("Mary", 55);
    list.insert("Jill", 22);
    list.previous();

    expect(list.position.subject).toEqual("Mary");

    list.delete();

    expect(list.position.subject).toEqual("Alex");
    expect(list.position.forwardNode.subject).toEqual("Jill");
    expect(list.position.forwardNode.forwardNode).toEqual(null);

    list.first();
    list.delete();

    expect(list.head.subject).toEqual("Dave");

    list.last();
    list.insert("John", 30);
    list.insert("Kate", 20);

    expect(list.totalAmounts()).toEqual(143);
});


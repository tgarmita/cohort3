import {ListNode, LinkedList } from './linkedList.js'

test('ListNode.show() returns subject and amount', () => {
    let node = new ListNode("Marsha", 39);

    expect(node.show()).toEqual("Subject: Marsha, Amount: 39");
});

test('insert() inserts new node after current position', () => {
    let list = new LinkedList();

    list.insert("Marsha", 39);

    expect(list.head.subject).toEqual("Marsha");
    expect(list.position.forwardNode).toEqual(null);

    list.insert("Dave", 43);

    expect(list.head.subject).toEqual("Marsha");
    expect(list.position.forwardNode.subject).toEqual("Dave");
    expect(list.position.forwardNode.forwardNode).toEqual(null);
});


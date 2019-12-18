import {ListNode, LinkedList } from './linkedList.js'

test('ListNode.show() returns subject and amount', () => {
    let node = new ListNode("Marsha", 39);

    expect(node.show()).toEqual("Subject: Marsha, Amount: 39");
});


//move into individual tests
test('LinkedList methods work correctly in all cases', () => {
    let list = new LinkedList();

    list.insert("Marsha", 39);

    expect(list.head.subject).toEqual("Marsha");
    expect(list.position.forwardNode).toEqual(null);

    list.insert("Dave", 43);

    expect(list.head.subject).toEqual("Marsha");
    expect(list.position.subject).toEqual("Dave");
    expect(list.position.forwardNode).toEqual(null);

    list.first();

    expect(list.position.subject).toEqual("Marsha");

    list.next();

    expect(list.position.subject).toEqual("Dave");

    list.insert("Alex", 28);
    list.last()

    expect(list.position.subject).toEqual("Alex");
    expect(list.position.forwardNode).toEqual(null);

    list.previous();

    expect(list.position.subject).toEqual("Dave");

    list.delete();
    expect(list.position.subject).toEqual("Marsha");
    expect(list.position.forwardNode.subject).toEqual("Alex");

    list.last();

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

    expect(list.head.subject).toEqual("Alex");

    console.log(list.head);
});


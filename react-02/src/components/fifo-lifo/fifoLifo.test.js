import {Queue, Stack, BagController} from './fifoLifo.js'

test('enqueue() adds item to top of the queue', () => {
    let fifo = new Queue;

    expect(fifo.queue).toEqual([]);

    fifo.enqueue("triangle")

    expect(fifo.queue[0]).toEqual("triangle");
});


test('dequeue() removes item from the bottom of the queue', () => {
    let fifo = new Queue;

    expect(fifo.queue).toEqual([]);

    fifo.enqueue("triangle")
    fifo.enqueue("square")
    fifo.enqueue("circle")

    expect(fifo.queue[0]).toEqual("triangle");

    fifo.dequeue();

    expect(fifo.queue[0]).toEqual("square");
});


test('push() adds item to top of the stack', () => {
    let lifo = new Stack;

    expect(lifo.stack).toEqual([]);

    lifo.push("triangle")

    expect(lifo.stack[0]).toEqual("triangle");
});


test('pop() adds item to top of stack', () => {
    let lifo = new Stack;

    expect(lifo.stack).toEqual([]);

    lifo.push("triangle")
    lifo.push("square")
    lifo.push("circle")

    expect(lifo.stack[lifo.stack.length -1]).toEqual("circle");

    lifo.pop();

    expect(lifo.stack[lifo.stack.length -1]).toEqual("square");
});


test('bag instantiates randomly', () => {
    let bagController = new BagController;

    expect(bagController.bag).not.toEqual(bagController.shapes);
});

test('pull() returns one shape, and refills the bag once empty', () => {
    let bagController = new BagController;

    expect(bagController.pull()).not.toBeNull();

    expect(bagController.bag.length).toEqual(6);

    bagController.pull()
    bagController.pull()
    bagController.pull()
    bagController.pull()
    bagController.pull()
    bagController.pull()
    bagController.pull()

    expect(bagController.bag.length).toEqual(6);
});
import React, { useState } from 'react';
import { Queue, Stack, BagController } from './fifoLifo.js'
import List from './List.js'
import './FifoLifoApp.css'

const fifo = new Queue();
const lifo = new Stack();
const bagController = new BagController();
const firstPull = bagController.pull();

const FifoLifoApp = () => {
  const [queue, setQueue] = useState(fifo.queue);
  const [stack, setStack] = useState(lifo.stack);
  const [next, setNext] = useState(firstPull);

  const handlePutIn = () => {
    fifo.enqueue(next);
    const queueUpdate = fifo.queue.slice();
    setQueue(queueUpdate);

    lifo.push(next);
    const stackUpdate = lifo.stack.slice();
    setStack(stackUpdate);

    setNext(bagController.pull())
  }

  const handleTakeOut = () => {
    fifo.dequeue();
    const queueUpdate = fifo.queue.slice();
    setQueue(queueUpdate);

    lifo.pop();
    const stackUpdate = lifo.stack.slice();
    setStack(stackUpdate);
  }

  return (
    <div>
      <div className="buttons-ui">
        <button onClick={handlePutIn}>Put In</button>
        <button onClick={handleTakeOut}>Take Out</button>
      </div>

      <div className="lists">
        <h3 >Queue</h3>
        <h4 >Upcoming Shape</h4>
        <h3 >Stack</h3>

        <List list={queue} type="queue" />
        <img className="next" src={next} alt={next} />
        <List list={stack} type="stack" />
      </div>
    </div>
  );
}

export default FifoLifoApp;
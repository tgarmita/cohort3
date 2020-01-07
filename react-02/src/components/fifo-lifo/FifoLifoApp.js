import React, { useState } from 'react';
import { Queue, Stack } from './fifoLifo.js'
import List from './List.js'

const fifo = new Queue();
const lifo = new Stack();

const FifoLifoApp = () => {
  const [queue, setQueue] = useState(fifo.queue);
  const [stack, setStack] = useState(lifo.stack);
  const [shape, setShape] = useState("Triangle");

  const handlePutIn = () => {
    fifo.enqueue(shape);
    const queueUpdate = fifo.queue.slice();
    setQueue(queueUpdate);

    lifo.push(shape);
    const stackUpdate = lifo.stack.slice();
    setStack(stackUpdate);
  }

  const handleTakeOut = () => {
    fifo.dequeue();
    const queueUpdate = fifo.queue.slice();
    setQueue(queueUpdate);

    lifo.pop(shape);
    const stackUpdate = lifo.stack.slice();
    setStack(stackUpdate);
  }

  return (
    <div>
      <div>
        <label>Select Shapes:
        <select value={shape} onChange={event => setShape(event.target.value)}>
            <option value="Triangle">Triangle</option>
            <option value="Square">Square</option>
            <option value="Circle">Circle</option>
            <option value="Hexagon">Hexagon</option>
          </select>
        </label>
        <button onClick={handlePutIn}>Put In</button>
        <button onClick={handleTakeOut}>Take Out</button>
      </div>
      <div>
        Queue<List list={queue} type="queue" /> 
        Stack<List list={stack} type="stack"/>
      </div>
    </div>
  );
}

export default FifoLifoApp;
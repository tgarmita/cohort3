import React, { useState } from 'react';
import { LinkedList } from './linkedList.js'

const list = new LinkedList();

const LinkedListApp = () => {
  const [position, setPosition] = useState();
  const [total, setTotal] = useState();
  
  const handleInsert = () => {
    list.insert("Marsha", 38);
    setPosition(list.position)
  }

  const handleFirst = () => {
    list.first();
    setPosition(list.position)
  }

  const handleLast = () => {
    list.last();
    setPosition(list.position)
  }

  const handleNext = () => {
    list.next();
    setPosition(list.position)
  }

  const handlePrevious = () => {
    list.previous();
    setPosition(list.position)
  }

  const handleDelete = () => {
    list.delete();
    setPosition(list.position)
  }
  
  const handleTotalAmounts = () => {
    setTotal(list.totalAmounts());
  }


  const renderNodes = () => {
    const listDisplay = [];
    let node = list.head;

    while (list.head && node) {
      console.log(node);
      listDisplay.push(
        <p key={node.subject} >{node.subject} {node.amount} {position === node ? " <" : ""}</p>)
      node = node.forwardNode;
    }
    return listDisplay;
  }

  return (
    <div>
      <button onClick={handleInsert}>Insert</button>
      <button onClick={handleFirst}>First</button>
      <button onClick={handleLast}>Last</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleTotalAmounts}>Total Amounts</button>
      <span>Total: {total}</span>

      {renderNodes()}
    </div>
  );
}

export default LinkedListApp;
import React from 'react';

const List = (props) => {

  const renderList = () => {
    props.list.reverse();

    let deleteIndex = 0;
    if(props.type === "queue") {
      deleteIndex =  props.list.length - 1;
    }
    return props.list.map(function (item, i, arr) {
      console.log(deleteIndex," ", i)
      this.counter = this.counter + 1;
      return <img key={this.counter} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tetris_T.svg/32px-Tetris_T.svg.png" style={deleteIndex === i ? { backgroundColor: '#fc0303' } : { backgroundColor: '#ffffff' }}/>
    }, { counter: 0 })
  }

  return (
    <div>
      {renderList()}
    </div>
  );
}

export default List;

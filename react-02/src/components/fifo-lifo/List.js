import React, {useEffect} from 'react';

const List = (props) => {
  /*useEffect(() => {
      use props.type somehow
    }); */

  const renderList = () => {
    return props.list.map(function (item) {
      this.counter = this.counter + 1;
      return <div key={this.counter}>{item}</div>
    }, { counter: 0 })
  }

  return (
    <div>
      {renderList()}
    </div>
  );
}

export default List;

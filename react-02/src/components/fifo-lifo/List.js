import React, { useContext } from 'react';
import { AppContext } from '../../context';

const List = (props) => {
  const theme = useContext(AppContext);

  const renderList = () => {
    props.list.reverse();

    let deleteIndex = 0;
    if (props.type === "queue") {
      deleteIndex = props.list.length - 1;
    }
    return props.list.map(function (item, i) {
      this.counter = this.counter + 1;
      return <img className="shape" key={this.counter} src={item} alt={item} style={deleteIndex === i ? { backgroundColor: theme.highlight } : null} />
    }, { counter: 0 })
  }

  return (
    <div className="list" style={{ borderColor: theme.icon }}>
      {renderList()}
    </div>
  );
}

export default List;

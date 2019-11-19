import React, { Component } from 'react';
import Square from './Square';


class Board extends Component {

  highlightWin(i) {
    if (this.props.line.includes(i)) return { backgroundColor: '#d4bea7' };
  }

  renderSquare(i) {
    const style = this.highlightWin(i);

    return <Square value={this.props.squares[i]} style={style} onClick={() => this.props.onClick(i)} />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;



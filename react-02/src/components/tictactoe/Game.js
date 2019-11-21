import React, { Component } from 'react';
import './Game.css';
import Board from './Board';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      xIsNext: true,
      gameStart: false
    }
    this.players = "pve";
  }

  startGame = () => {
    this.setState({
      gameStart: true
    })

    let pvp = document.getElementById("idPVP")

    if (pvp.checked) {
      this.players = "pvp"
      console.log(this.players)
    }
  }


  handleClick = async (i) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squaresCopy = current.squares.slice()

    //Ends game, prevents overwriting moves, and checks that game has started
    if (calculateWinner(squaresCopy).winner || squaresCopy[i] || !
      this.state.gameStart) {
      return
    }

    //Places current players move
    if (this.state.xIsNext) {
      squaresCopy[i] = "X"
    } else {
      squaresCopy[i] = "O"
    }
    await this.setState(state => {
      return {
        history: history.concat([{
          squares: squaresCopy,
        }]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext
      }
    });

    //If Os turn - run AIs next move
    if (!this.state.xIsNext && this.players === "pve") {
      this.expert(squaresCopy);
    }

  }


  //Activate time travel
  jumpTo = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  expert(squares) {
    console.log("computer goes")
    const pick = this.evaluateSquares(squares);
    this.handleClick(pick);
  }

  evaluateSquares(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let squareValues = [1, 0, 1, 0, 3, 0, 1, 0, 1];
    console.log(squares)

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if ((squares[a] === 'X' && squares[b] === 'X') || (squares[a] === 'X' && squares[c] === 'X') || (squares[b] === 'X' && squares[c] === 'X')) {
        squareValues[a] = 8;
        squareValues[b] = 8;
        squareValues[c] = 8;

      }
      if ((squares[a] === 'O' && squares[b] === 'O') || (squares[a] === 'O' && squares[c] === 'O') || (squares[b] === 'O' && squares[c] === 'O')) {
        squareValues[a] = 10;
        squareValues[b] = 10;
        squareValues[c] = 10;

      }
      if(i>5){
        if((squares[a] === 'X' && !squares[b] && !squares[c]) || (squares[c] === 'X' && !squares[a] && !squares[b])){
          squareValues[a] = 5;
          squareValues[c] = 5;
      }
    }
  }
   

    //Assigns -1 to squares already taken
    squareValues = squareValues.map((ele, i) => {
      if (squares[i]) {
        return -1;
      }
      return ele;
    })


    let index;
    let highest = -100;

    squareValues.forEach((ele, i) => {
      if (ele > highest) {
        highest = ele;
        index = i;
      }
    })
    // const pick = getRandomIntInclusive(0, 8);
    console.log(squareValues)


    const pick = index;
    return pick;
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const win = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status = "Next player: " + (this.state.xIsNext ? "X" : "O");

    if (win.winner) {
      status = "Winner: " + win.winner;
    }

    return (
      <div className="game">
        <div className="options">
          <h3>Options:</h3>
          <div>
            <input type="radio" id="idPVP" name="players" value="pvp" />Multiplayer
            <input type="radio" id="idPVE" name="players" value="pve" defaultChecked />vs. AI
          </div>

          <div>
            <input type="radio" id="idPlayerStart" name="turn order" value="player start" defaultChecked />Player Starts
            <input type="radio" id="idAIStart" name="turn order" value="ai start" />AI Starts
          </div>

          <div>
            <input type="radio" id="idPlayerStart" name="difficulty" value="expert" />Hard
            <input type="radio" id="idAIStart" name="difficulty" value="hard" defaultChecked />Expert
          </div>

          <div>
            <button id="idPlay" onClick={this.startGame}>Play</button>
          </div>
        </div>


        <div className="game-board">
          <Board squares={current.squares} line={win.winner ? win.line : []} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  return { winner: null };
}


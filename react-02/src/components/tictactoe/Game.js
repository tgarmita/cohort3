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
    this.difficulty = "expert";
  }

  startGame = async () => {
    let pvp = document.getElementById("idPVP")
    let aiStart = document.getElementById("idAIStart")
    let hard = document.getElementById("idHard")

    this.setState({
      gameStart: true
    })

    if (pvp.checked) {
      this.players = "pvp"
    }

    if (aiStart.checked) {
      await this.setState({
        xIsNext: false
      })
      if (!this.state.xIsNext && this.players === "pve") {
        this.computerMove(this.state.history[0].squares);
      }
    }

    if (hard.checked) {
      this.difficulty = "hard"
    }
  }

  handleClick = async (i) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squaresCopy = current.squares.slice()

    if (calculateWinner(squaresCopy).winner || squaresCopy[i] || !
      this.state.gameStart) {
      return
    }

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

    if (!this.state.xIsNext && this.players === "pve") {
      this.computerMove(squaresCopy);
    }
  }

  jumpTo = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  computerMove(squares) {
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

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (i === 0 || i === 2 || i === 3 || i === 5) {
        if (!squares[a] && squares[b] && !squares[c]) {
          squareValues[a] += 1;
          squareValues[c] += 1;
        }

      }
      if (i > 5) {
        if (squares[a] === 'X' && squares[c] === 'X') {
          squareValues[1] += 5;
          squareValues[3] += 5;
          squareValues[5] += 5;
          squareValues[7] += 5;
        }
      }
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
    }

    squareValues = squareValues.map((ele, i) => {
      if (squares[i]) {
        return -1;
      }
      return ele;
    })

    let index;
    let highest = -100;
    let secondHighest = -100;
    let secondIndex;

    squareValues.forEach((ele, i) => {
      if (ele > highest) {
        secondHighest = highest;
        secondIndex = index;
        highest = ele;
        index = i;
      }
    })

    if (this.difficulty === "hard" && secondHighest > 0 && Math.random() <= 0.2) {
      console.log("Suboptimal move")
      return secondIndex
    }
    return index;
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
    } else if (this.state.stepNumber === 9) {
      status = "Tie game";
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
            <input type="radio" id="idExpert" name="difficulty" value="expert" defaultChecked />Expert
            <input type="radio" id="idHard" name="difficulty" value="hard" />Hard
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


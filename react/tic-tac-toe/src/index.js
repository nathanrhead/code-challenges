import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// React component 1 of 3: a "controlled component" (by the Board component)
function Square(props) {
  return (
    <button 
      className="square" 
      onClick={props.onClick}
    >
      {props.value} 
    </button>
  );
}

// React component 2 of 3
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
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

// React component 3 of 3: The parent component.
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        squareLocation: {
          row: 0,
          col: 0,
        } 
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    // This is the history of the game from the empty board to the latest step number, accounting for the possibility that a player has clicked on one of the buttons that wind the game back to a previous step. 
    const history = this.state.history.slice(0, this.state.stepNumber + 1);

    // The latest iteration of history, reflecting the move just prior to the latest move/click.
    const current = history[history.length - 1];

    // A copy of the lastest squares array.
    const squares = current.squares.slice();

    let row;
    let col;

    if (i <= 2) row = 1; 
    else if(i > 2 && i <= 5) row = 2;
    else row = 3;

    if (i === 0 || i === 3 || i === 6) col = 1;
    else if (i === 1 || i === 4 || i === 7) col = 2;
    else col = 3;
    
    if (calculateWinner(squares) || squares[i]) 
      return;
    
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      // history: [...history, squares, colRow]: doesn't work, but Ima figure out the spread operator.
      history: history.concat([{
        squares,
        squareLocation: {
          row: row,
          col: col
        }
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const squares = current.squares;
    const winner = calculateWinner(squares);
    const moves = history.map((step, move) => {
      const desc = move ? `Move # ${move}: row ${step.squareLocation.row}, col ${step.squareLocation.col}` : 'Game start';
      return (
        <li key={move} className="list">
          <button className="button" onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

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
      return squares[a];
    }
  }
  return null;
}
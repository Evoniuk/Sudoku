import React from 'react';
import Row from './Row';

export default class Board extends React.Component {
  constructor(props) {
    super();

    const notes = [];
    for (let i = 0; i < 9; i++) {
      const row = [];
      for (let j = 0; j < 9; j++)
        row.push(new Set());
      notes.push(row);
    }

    this.state = {
      originalBoard: props.board,
      board: props.board.map(row => row.map(entry => entry)),
      solvedBoard: props.solvedBoard,
      notes: notes,
      clickedNum: 0,
      clickedRow: -1,
      clickedColumn: -1,
    }
    this.colors = props.colors;
    this.shiftPressed = false;

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.changePlace = this.changePlace.bind(this);
    this.makeEntry = this.makeEntry.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleClick(_, value, row, column) {
    this.setState({
      clickedNum: value,
      clickedRow: row,
      clickedColumn: column,
    })
  }

  handleKeyDown(event) {
    if (this.state.clickedRow === -1) return;

    const keyCode = event.keyCode;
    const row = this.state.clickedRow;
    const column = this.state.clickedColumn;

    if (keyCode === 16) this.shiftPressed = true;
    else if (keyCode >= 37 && keyCode <= 40) {
      event.preventDefault();
      this.changePlace(keyCode, row, column);
    } else if (this.state.originalBoard[row][column]) return;
    else if ((keyCode >= 48 && keyCode <= 57) || keyCode === 8)
      this.makeEntry(keyCode, row, column);
  }

  changePlace(keyCode, row, column) {
    this.setState(prevState => {
      keyCode === 37 ? column--:
      keyCode === 38 ? row--:
      keyCode === 39 ? column++:
      row++;

      if (row > 8) row = 0;
      else if (row < 0) row = 8;
      if (column > 8) column = 0;
      else if (column < 0) column = 8;

      return {
        clickedNum: prevState.board[row][column],
        clickedRow: row,
        clickedColumn: column,
      };
    })
  }

  makeEntry(keyCode, row, column) {
    this.setState(prevState => {
      if (this.shiftPressed) {
        prevState.board[row][column] = 0;
        keyCode > 8 && prevState.notes[row][column].has(keyCode - 48) ?
          prevState.notes[row][column].delete(keyCode - 48):
          prevState.notes[row][column].add(keyCode - 48);
      } else {
        prevState.board[row][column] =
          keyCode > 48 ? keyCode - 48 : 0;
        prevState.notes[row][column].clear();
      }

      return {
        board: prevState.board,
        notes: prevState.notes,
        clickedNum: prevState.board[row][column],
      };
    })
  }

  handleKeyUp(event) {
    if (event.keyCode === 16)
      this.shiftPressed = false;
  }

  handleBlur() {
    this.setState({
      clickedNum: 0,
      clickedRow: -1,
      clickedColumn: -1,
    })
  }

  render() {
    const rows = Array(9).fill().map((_, row) => <Row
      state={this.state}
      row={row}
      colors={this.colors}
      handleClick={this.handleClick}
      key={row} // just to stop react complaining
    />)

    return (
      <main
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        tabIndex='0' // allows key events to register
        onBlur={this.handleBlur}
        style={{background: this.colors.mainBackground}}
      >
        <div className='board'>{rows}</div>
      </main>
    )
  }
}

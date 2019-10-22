import React from 'react';
import Notes from './Notes';

export default function Place(props) {
  const {colors, row, column, state} = props;

  const style = {};
  setBorder(style, colors, row, column);
  setBackground(style, colors, row, column, state);
  setColor(style, colors, row, column, state);

  const value = state.board[row][column];
  const notes = state.notes[row][column];
  return (
    <div
      onClick={e => props.handleClick(e,
        value, row, column)}
      style={style}
      className='place'
    >
      {notes.size ? <Notes notes={notes}/>:
      value ? value : ''}
    </div>
  )
}

function setBorder(style, colors, row, column) {
  style.borderLeft = '1px solid ' + colors.borders;
  style.borderRight = column === 8 ? '3px solid ' + colors.borders : null;
  style.borderTop = '1px solid ' + colors.borders;
  style.borderBottom = row === 8 ? '3px solid ' + colors.borders : null;

  if (row % 3 === 0) style.borderTop = '3px solid ' + colors.borders;
  if (column % 3 === 0) style.borderLeft = '3px solid ' + colors.borders;
}

function setBackground(style, colors, row, column, state) {
  const thisSquare = 3 * Math.trunc(row / 3)
    + Math.trunc(column / 3);
  const clickedSquare = state.clickedRow === -1 ? -1 :
    3 * Math.trunc(state.clickedRow / 3)
    + Math.trunc(state.clickedColumn / 3);

  if (row === state.clickedRow
    || column === state.clickedColumn
    || thisSquare === clickedSquare)
    style.background = colors.activeColor;

  if (column === state.clickedColumn
    && row === state.clickedRow)
    style.background = colors.clickedPlace;
}

function setColor(style, colors, row, column, state) {
  if (state.notes[row][column].size === 0) {
    const value = state.board[row][column]
    const placedNum = state.originalBoard[row][column] === 0;
    const wrongNum = value !== state.solvedBoard[row][column];

    style.color = wrongNum ? colors.wrongNum:
      state.clickedNum === value ? colors.clickedNum:
      placedNum ? colors.placedNum:
      colors.numbers;
  } else style.color = colors.noteColor;
}

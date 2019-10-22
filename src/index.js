import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import solveSudoku from './boardLogic/solveSudoku';
import provideBoard from './boardLogic/provideBoard';
import './index.css';

const board = provideBoard();
const solvedBoard = solveSudoku(board);

const colors = {
  mainBackground: 'rgb(37, 43, 57)',
  activeColor: 'rgba(32, 100, 109, .4)',
  numbers: 'white',
  placedNum: 'lightskyblue',
  clickedNum: 'gold',
  wrongNum: 'salmon',
  borders: 'powderblue',
  clickedPlace: 'rgba(32, 178, 170, .4)',
  noteColor: 'lightgrey',
}

ReactDOM.render(<Board
  board={board}
  solvedBoard={solvedBoard}
  colors={colors}
/>, document.getElementById('root'));

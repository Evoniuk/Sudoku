// TODO: have this function provide a random board each call
export default function provideBoard() {
  return [
    [8,7,3,4,1,0,9,0,0],
    [0,6,5,0,2,8,0,7,0],
    [0,2,0,7,0,3,0,0,0],
    [5,4,0,0,0,0,2,1,0],
    [2,0,8,0,0,7,4,9,0],
    [6,9,0,0,8,0,0,0,0],
    [4,8,0,0,0,0,5,0,0],
    [7,0,0,0,3,1,6,0,9],
    [0,1,0,0,0,9,8,0,7],
  ];
}

// export default function provideBoard() {
//   const result = [[],[],[],[],[],[],[],[],[]];
//   for (let i = 0; i < 3; i++) // fill in squares on main diagonal
//     fillSquare(result, i*4, randomize1to9());

//   return result;
// }

// function fillSquare(board, square, arr) {
//   const row = i => 3 * Math.floor(square / 3) + Math.floor(i / 3);
//   const col = i => 3 * (square % 3) + i % 3;
//   arr.forEach((num, i) => board[row(i)][col(i)] = num);
// }

// function randomize1to9() {
//   const result = [];
//   while (result.length < 9) {
//     const numToAdd = Math.floor(Math.random() * 9) + 1;
//     if (!result.includes(numToAdd)) result.push(numToAdd);
//   }
//   return result;
// }

const checkWinner = board => {
  // curGrid
};

const checkBoardisFull = board => {};

const saveCurMove = (row, col, color) => {
  const value = color === 'red' ? 1 : 2;
  const curGrid = JSON.parse(window.localStorage.getItem('board'));

  curGrid[row - 1][col] = value;

  checkWinner(curGrid);
  checkBoardisFull(curGrid);
};

module.exports = { saveCurMove };

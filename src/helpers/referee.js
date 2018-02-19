const helper = require('./refereeHelper');

const checkWinner = (board, r, c, value) => {
  if (helper.checkHoriZontalDirection(r, c, value, board)) return true;
  if (helper.checkVirticalDirection(r, c, value, board)) return true;
  if (helper.checkMajorDirection(r, c, value, board)) return true;
  if (helper.checkMinorDirection(r, c, value, board)) return true;
  return false;
};

const openWinnerModal = () => {
  const modal = document.getElementById('showWinner');
  const winnerContainer = document.getElementById('curWinner');
  const curWinner = document.getElementById('curColor').innerText;
  winnerContainer.innerText = `${curWinner} won!!`;
  modal.style.display = 'block';
};

// const checkBoardisFull = () => {};

const saveCurMove = (row, col, color) => {
  // checkBoardisFull(curGrid);
  const value = color === 'red' ? 1 : 2;
  const curGrid = JSON.parse(window.localStorage.getItem('board'));

  curGrid[row - 1][col] = value;
  window.localStorage.setItem('board', JSON.stringify(curGrid));
  const hasWinner = checkWinner(curGrid, row - 1, col, value);

  if (hasWinner) openWinnerModal();
};

module.exports = { saveCurMove };

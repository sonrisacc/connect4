const utlis = require('./helpers/utils');
const init = require('./helpers/initData');

const base = document.querySelector('.base');
const resetBtn = document.querySelector('.blueBtn.startGame');
const newGameBtn = document.getElementById('newGame');
const closeModalBtn = document.getElementById('closeModal');

init.initColMaxDepth();
init.initBoard();

utlis.domBoardGenerator(base);
resetBtn.addEventListener('click', () => utlis.resetGame(base));
newGameBtn.addEventListener('click', () => {
  utlis.resetGame(base);
  utlis.closeModal();
});
closeModalBtn.addEventListener('click', () => {
  utlis.closeModal();
});

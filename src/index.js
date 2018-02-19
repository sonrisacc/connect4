const utlis = require('./helpers/utils');
const init = require('./helpers/initData');

const base = document.querySelector('.base');
const resetBtn = document.querySelector('.blueBtn.startGame');

init.initColMaxDepth();
init.initBoard();

utlis.domBoardGenerator(base);
resetBtn.addEventListener('click', () => utlis.resetGame(base));

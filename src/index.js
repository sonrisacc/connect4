const utlis = require('./helpers/utils');
const initData = require('./helpers/initData');

const base = document.querySelector('.base');

window.localStorage.setItem('colMaxDepth', JSON.stringify(initData));
utlis.boardGenerator(base);

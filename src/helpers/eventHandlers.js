const mouseOnToken = (curToken, color) => {
  curToken.classList.add(color);
};

const mouseLeaveToken = curToken => {
  const cls = ['red', 'yellow'];
  curToken.classList.remove(...cls);
};

const togglePlayer = () => {
  const globalColor = document.querySelector('b[id="curColor"]');
  globalColor.innerText = globalColor.innerText === 'red' ? 'yellow' : 'red';
};

const updateCurCol = e => {
  const col = document.getElementById('curCol');
  const curCul = e.target.closest('.col').classList[1];
  col.innerHTML = curCul;
  return curCul;
};

const annimateTokenDrop = (curColName, depth) => {
  const color = document.getElementById('curColor').innerHTML;
  const curColOfTokens = document.querySelector(`.col.${curColName}`).children;
  // will add annimation later
  // for (let i = 0; i < depth.length; i++) {
  curColOfTokens[depth].firstElementChild.classList.add(color);
  // }
};

const dropToken = e => {
  const curGrid = JSON.parse(window.localStorage.getItem('colMaxDepth'));
  const curCol = updateCurCol(e);
  const curMaxDepth = curGrid[curCol];
  annimateTokenDrop(curCol, curMaxDepth);

  // update curCol's max depth
  curGrid[curCol] -= 1;
  const newGrid = JSON.stringify(curGrid);
  window.localStorage.setItem('colMaxDepth', newGrid);
};

/* Helper function end */

const findAndAddColor = e => {
  const col = updateCurCol(e);
  const color = document.querySelector('b[id="curColor"]').innerText;
  const curToken = document.querySelector(`.inner.${col}`);
  mouseOnToken(curToken, color);
};

const findAndRemoveColor = e => {
  const col = updateCurCol(e);
  const color = document.querySelector('b[id="curColor"]').innerText;
  const curToken = document.querySelector(`.inner.${col}`);
  mouseLeaveToken(curToken, color);
};

const playerPlayed = e => {
  dropToken(e);
  // checkWinner
  togglePlayer();
};

module.exports = {
  findAndAddColor,
  findAndRemoveColor,
  playerPlayed,
};

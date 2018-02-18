const mouseOnToken = (curToken, color) => {
  curToken.classList.add(color);
};
const mouseLeaveToken = (curToken, color) => {
  curToken.classList.remove(color);
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
const findAndAddColor = e => {
  const col = updateCurCol(e);
  const color = document.getElementById('curColor').innerHTML;
  const curToken = document.querySelector(`.inner.${col}`);
  mouseOnToken(curToken, color);
};

const findAndRemoveColor = e => {
  const col = updateCurCol(e);
  const color = document.getElementById('curColor').innerHTML;
  const curToken = document.querySelector(`.inner.${col}`);
  mouseLeaveToken(curToken, color);
};

const dropToken = e => {
  const curGrid = JSON.parse(window.localStorage.getItem('colMaxDepth'));
  const curCol = updateCurCol(e);
  const curMaxDepth = curGrid[curCol];
  annimateTokenDrop(curCol, curMaxDepth);
};

module.exports = {
  findAndAddColor,
  findAndRemoveColor,
  dropToken,
};

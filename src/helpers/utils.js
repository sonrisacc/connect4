const event = require('./eventHandlers');

const domBoardGenerator = target => {
  const colNum = 7;
  const rowNum = 7; // 1 hidden row, 6 actual row

  for (let i = 0; i < colNum; i++) {
    const col = document.createElement('div');
    col.className = `col col-${i}`;

    for (let j = 0; j < rowNum; j++) {
      const row = document.createElement('div');
      const innerToken = document.createElement('div');
      innerToken.className = 'inner';
      row.className = `square square-${j}`;

      if (j === 0) {
        innerToken.className = `inner  col-${i}`;
        row.className = `square square-${j} hidden`;
      }

      row.addEventListener('mouseover', event.findAndAddColor);
      row.addEventListener('mouseleave', event.findAndRemoveColor);
      innerToken.addEventListener('click', event.playerPlayed);

      row.append(innerToken);
      col.append(row);
    }
    target.append(col);
  }
};

const resetGame = myNode => {
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  // reset local storage
  // reset colMaxDepth
  // reset curCol
  domBoardGenerator(myNode);
};

module.exports = { domBoardGenerator, resetGame };

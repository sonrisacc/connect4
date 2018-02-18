const boardGenerator = target => {
  const colNum = 7;
  const rowNum = 6;

  for (let i = 0; i < colNum; i++) {
    const col = document.createElement('div');
    col.className = `col col-${i}`;
    for (let j = 0; j < rowNum; j++) {
      const row = document.createElement('div');
      const innerToken = document.createElement('div');
      innerToken.className = 'inner';
      row.className = `square square-${j}`;
      if (j === 1) row.className = `square square-${j} hidden`;

      row.append(innerToken);
      col.append(row);
    }
    target.append(col);
  }
};

module.exports = { boardGenerator };

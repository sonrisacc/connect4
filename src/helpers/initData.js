const initLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const initColMaxDepth = () => {
  const data = {
    'col-0': 6,
    'col-1': 6,
    'col-2': 6,
    'col-3': 6,
    'col-4': 6,
    'col-5': 6,
    'col-6': 6,
  };
  initLocalStorage('colMaxDepth', data);
};

const initBoard = () => {
  const board = [];
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      row.push(0);
    }
    board.push(row);
  }
  console.log('board', board);
  initLocalStorage('board', board);
};

module.exports = { initColMaxDepth, initBoard };

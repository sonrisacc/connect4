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
  for (let i = 0; i < 1; i++) {
    const row = [];
    for (let j = 0; j < 1; j++) {
      row.push('');
    }
    board.push(row);
  }
  initLocalStorage('board', board);
};

module.exports = { initColMaxDepth, initBoard };

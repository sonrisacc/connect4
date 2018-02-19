// check 4 in a row stratergy
// for horizontal, vertical, diagnoal checks:
// start from curGrid,  search outward in both(positive & negtive) direction
// while next = cur, keep going , counter ++
// if counter === 4 winner

const isInBound = (r, c) => !!(r >= 0 && r < 6 && c >= 0 && c < 7);

const checkHoriZontalDirection = (r, c, value, board) => {
  let counter = -1;
  let m = c;
  let n = c;
  while (isInBound(r, m) && board[r][m] === value) {
    m += 1;
    counter++;
    if (counter >= 4) return true;
  }
  while (isInBound(r, n) && board[r][n] === value) {
    n -= 1;
    counter++;
    if (counter >= 4) return true;
  }
  return false;
};

const checkVirticalDirection = (r, c, value, board) => {
  let counter = 1;
  let m = r + 1;
  let n = r - 1;
  while (isInBound(m, c) && board[m][c] === value) {
    m += 1;
    counter++;
    if (counter >= 4) return true;
  }
  while (isInBound(n, c) && board[n][c] === value) {
    n -= 1;
    counter++;
    if (counter >= 4) return true;
  }
  return false;
};

const checkMajorDirection = (r, c, value, board) => {
  let counter = 1;
  let m = r + 1;
  let n = r - 1;
  let i = c + 1;
  let j = c - 1;
  while (isInBound(m, i) && board[m][i] === value) {
    m += 1;
    i += 1;
    counter++;
    if (counter >= 4) return true;
  }
  while (isInBound(n, j) && board[n][j] === value) {
    n -= 1;
    j -= 1;
    counter++;
    if (counter >= 4) return true;
  }
  return false;
};

const checkMinorDirection = (r, c, value, board) => {
  let counter = 1;
  let m = r + 1;
  let n = r - 1;
  let i = c + 1;
  let j = c - 1;
  while (isInBound(m, j) && board[m][j] === value) {
    m += 1;
    j -= 1;

    counter++;
    if (counter === 4) return true;
  }
  while (isInBound(n, i) && board[n][i] === value) {
    n -= 1;
    i += 1;
    counter++;
    if (counter === 4) return true;
  }
  return false;
};

module.exports = {
  checkHoriZontalDirection,
  checkVirticalDirection,
  checkMajorDirection,
  checkMinorDirection,
};

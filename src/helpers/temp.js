let counter = -1;
let m = c;
let n = c;
console.log('board', board);
console.log('r, c', value);
console.log('r, m', board[r][m]);
console.log('r, n', board[r][n]);
console.log('in bound', isInBound(r, m));

while (isInBound(r, m) && board[r][m] === value) {
  m += 1;
  counter++;
  console.log('m', m);
  console.log('10', counter);
  if (counter >= 4) return true;
}
while (isInBound(r, n) && board[r][n] === value) {
  n -= 1;
  counter++;
  console.log('n', n);
  console.log('counter', counter);
  if (counter >= 4) return true;
}
return false;
};

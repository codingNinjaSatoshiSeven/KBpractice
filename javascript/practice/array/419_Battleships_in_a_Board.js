/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  if (!board || board.length === 0 || board[0].length ===0) return 0;
  var res = 0, m = board.length, n = board[0].length;
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if(board[i][j] === '.' || (i > 0 && board[i-1][j] ==='X') || (j>0 && board[i][j-1] ==='X')) {
        continue;
      }
      res++;
    }
  }
  return res;
};

console.log(countBattleships([
  ['X', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
]));

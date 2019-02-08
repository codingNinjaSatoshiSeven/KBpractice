/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  var m = board.length, n = m ? board[0].length :0;
  var dx = [-1, -1, -1, 0, 1, 1, 1, 0];
  var dy = [-1, 0, 1, 1, 1, 0, -1, -1];
  for(var i = 0; i<m; i++) {
    for(var j = 0; j<n; j++) {
      var cnt = 0;
      for(var k = 0; k<8; k++) {
        var x = i + dx[k], y = j + dy[k];
        if(x>=0 && x< m && y >=0 && y < n &&
          (board[x][y] == 1 || board[x][y] == 2)) {
            cnt++;
          }
      }
      if(board[i][j] &&(cnt <2 || cnt>3)) board[i][j] =2;
      else if (!board[i][j] && cnt === 3) board[i][j] = 3;
    }
  }
  for(var i =0; i<m; i++) {
    for(var j = 0; j<n; j++) {
      board[i][j] %=2;
    }
  }
};

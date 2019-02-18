/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  var dr = [-1, 0, 1, 0];
  var dc = [0, -1, 0, 1];
  var R = grid.length, C = grid[0].length;
  var queue = [];
  var depth = {};
  for(var r = 0; r<R; r++) {
    for(var c = 0; c<C; c++) {
      if(grid[r][c] === 2) {
        var code = r*C +c;
        queue.push(code);
        depth[code] = 0;
      }
    }
  }
  var ans = 0;
  while(queue.length !== 0) {
    var code = queue.shift();
    var r = Math.floor(code/C);
    var c = code %C;
    for(var k = 0; k<4; k++) {
      var nr = r + dr[k];
      var nc = c + dc[k];
      if(0 <=nr && nr <R && 0<=nc && nc <C && grid[nr][nc]===1) {
        grid[nr][nc] = 2;
        var ncode = nr*C +nc;
        queue.push(ncode);
        depth[ncode] = depth[code] +1;
        ans = depth[ncode];
      }
    }
  }
  for(var i = 0; i<grid.length ;i++) {
    var row = grid[i];
    for(var j=0; j<row.length; j++) {
      if(row[j] ===1) {
        return -1;
      }
    }
  }
  return ans;
};

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));
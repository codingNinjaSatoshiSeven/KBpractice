//TODO:REVIEW
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || !grid[0]) return 0;
  var m = grid.length;
  var n = grid[0].length;
  var res = 0;
  var visited = [];
  for(var i = 0; i<m;i++) {
    visited.push([]);
    for (var j = 0; j<n; j++) {
      visited[i][j] = false;
    }
  }
  for(var i = 0; i<m;i++) {
    for (var j = 0; j<n; j++) {
      if(grid[i][j]=== '1' && !visited[i][j]) {
        dfs(grid, visited, i, j);
        ++res;
      }
    }
  }
  return res;
};

function dfs(grid, visited, x, y) {
  if (x < 0 || x >=grid.length) return;
  if (y <0 || y >=grid[0].length) return;
  if(grid[x][y] !=='1' || visited[x][y]) return;
  visited[x][y] = true;
  dfs(grid, visited, x-1, y);
  dfs(grid, visited, x+1, y);
  dfs(grid, visited, x, y-1);
  dfs(grid, visited, x, y+1);
}

console.log(numIslands([['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']]
))
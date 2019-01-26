/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  var n = grid.length;
  var ans = 0;
  for(var i = 0; i < n; i++) {
    var bestRow = 0; // largest of grid[i][j]
    var bestCol = 0; // largest of grid[j][i]
    for(var j = 0; j < n; j++) {
      if(grid[i][j] >0) ans++; // top shadow
      bestRow = Math.max(bestRow, grid[i][j]);
      bestCol = Math.max(bestCol, grid[j][i]);
    }
    ans += bestRow + bestCol;
  }
  return ans;
};

console.log(projectionArea([[1,2],[3,4]]));
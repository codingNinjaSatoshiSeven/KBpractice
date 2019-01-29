/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  var N = grid.length;
  var rowMaxes = [], colMaxes = [];
  for(var r = 0; r<N; r++) {
    for(var c = 0; c<N; c++) {
      rowMaxes[r] = Math.max(rowMaxes[r]||0, grid[r][c]);
      colMaxes[c] = Math.max(colMaxes[c]||0, grid[r][c]);
    }
  }
  console.log(rowMaxes, colMaxes);
  var ans = 0;
  for (var r = 0; r<N; r++) {
    for (var c = 0; c<N;c++) {
      ans += Math.min(rowMaxes[r], colMaxes[c]) - grid[r][c];
    }
  }
  return ans;
};

console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]));
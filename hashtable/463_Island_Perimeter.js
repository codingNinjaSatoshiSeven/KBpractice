/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  var row = grid.length;
  var col = grid[0].length;
  var perimeter = 0;
  for (var i = 0; i < row; i ++) {
    for (var j = 0; j < col; j++) {
      perimeter += findBlockPerimeter(grid, i, j, row, col);
    }
  }
  return perimeter;
};

function findBlockPerimeter(grid, m, n, row, col) {
  if (grid[m][n] === 0) return 0;
  var sum = 0;
  if (m-1 < 0 || grid[m-1][n] === 0) {
    sum++;
  }
  if (m+1 > row-1 || grid[m+1][n] === 0) {
    sum++;
  }
  if(n-1 < 0 || grid[m][n-1] === 0) {
    sum++;
  }
  if(n+1 > col-1 || grid[m][n+1] === 0) {
    sum++;
  }
  return sum;
}

var grid = [
  [0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0]
];

console.log(islandPerimeter(grid));
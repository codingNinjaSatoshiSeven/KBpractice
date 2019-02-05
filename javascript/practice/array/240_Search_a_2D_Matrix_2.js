/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(!matrix || matrix.length ===0 || matrix[0].length ===0) return false;
  if(target < matrix[0][0] || target > matrix[matrix.length-1][matrix[0].length-1]) return false;
  var x = matrix.length -1, y = 0; // start at lower left
  while(true) {
    if(matrix[x][y] > target) x--; // target is smaller, move up
    else if (matrix[x][y] < target) y++; // targetis bigger
    else return true;
    if(x< 0 || y >=matrix[0].length) break;
  }
  return false;
};

console.log(searchMatrix([
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 5));
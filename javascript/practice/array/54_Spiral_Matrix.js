/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }
  var res = [];
  var m = matrix.length, n = matrix[0].length;
  var up = 0, down = m-1, left = 0, right = n-1;
  while (true) {
    for(var j=left; j<=right; j++) res.push(matrix[up][j]);
    if(++up > down) break;
    for(var i=up; i<=down; i++) res.push(matrix[i][right]);
    if(--right < left) break;
    for(var j=right; j>=left; j--) res.push(matrix[down][j]);
    if(--down < up) break;
    for(var i=down; i>=up; i--) res.push(matrix[i][left]);
    if(++left > right) break;
  }
  return res;
};

console.log(spiralOrder([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ]));
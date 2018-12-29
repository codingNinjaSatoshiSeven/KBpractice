/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var m = matrix.length, n = matrix[0].length;
  var rowZero = false, colZero = false;
  for(var i=0; i<m; i++) {
    if(matrix[i][0] === 0) colZero = true;
  }
  for(var j=0; j<n; j++) {
    if(matrix[0][j] === 0) rowZero = true;
  }
  for(var i = 1; i<m; i++) {
    for(var j=1; j<n; j++) {
      if(matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0]=0;
      }
    }
  }
  for(var i=1; i<m; i++) {
    for(var j=1; j<n; j++) {
      if(matrix[0][j] === 0 || matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if(rowZero) {
    for (var i=0; i<n; i++) matrix[0][i] = 0;
  }
  if(colZero) {
    for (var i=0; i<m; i++) matrix[i][0] = 0;
  }
};

var a = [
  [1,1,1],
  [1,0,1],
  [1,1,1]
];
setZeroes(a);
console.log(a);


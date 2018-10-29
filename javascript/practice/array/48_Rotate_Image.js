///TODO: REVIEW
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  if(!matrix || matrix.length === 1) return;
  var n = matrix.length;
  for (var i = 0; i <= n/2; i++) {
    for (var j = i; j < n-1-i; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[n-j-1][i];
      matrix[n-j-1][i] = matrix[n-i-1][n-j-1];
      matrix[n-i-1][n-j-1] = matrix[j][n-i-1];
      matrix[j][n-i-1] = temp;
    }
  }
  console.log(matrix);
};

var a = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
];

rotate(a);
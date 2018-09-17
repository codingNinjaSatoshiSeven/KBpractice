/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  var matrix = [];
  for (var i = 0; i < m; i++) {
    matrix.push([]);
    for (var j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }

  for (var i = 0; i < m; i++) {
    matrix[i][0] = 1;
  }

  for (var j = 0; j < n; j ++) {
    matrix[0][j] = 1;
  }

  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      matrix[i][j] = matrix[i-1][j] + matrix[i][j-1];
    }
  }
  return matrix[m-1][n-1];
};

console.log(uniquePaths(3,2));
console.log(uniquePaths(7,3));
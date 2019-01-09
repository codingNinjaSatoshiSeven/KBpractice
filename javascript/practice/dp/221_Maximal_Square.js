/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  var rows = matrix.length, cols = rows > 0 ? matrix[0].length: 0;
  var dp = [], maxsqlen = 0;
  for(var i = 0; i< rows+1; i++) {
    dp.push([]);
    for (var j = 0; j<cols+1; j++) {
      dp[i][j] = 0;
    }
  }
  for (var i = 1; i <= rows; i++) {
    for (var j = 1;j <=cols; j++) {
      if (matrix[i-1][j-1]=== '1') {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
        maxsqlen = Math.max(maxsqlen, dp[i][j]);
      }
    }
  }
  return maxsqlen * maxsqlen;
};

console.log(maximalSquare([['1', 0, '1', 0, 0],
  ['1', 0, '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', 0, 0, '1', 0,]]));
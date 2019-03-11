/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  var R = obstacleGrid.length;
  var C = obstacleGrid[0].length;
  if (obstacleGrid[0][0]===1) {
    return 0;
  }
  obstacleGrid[0][0] = 1;
  for(var i = 1; i<R; i++) {
    obstacleGrid[i][0] = (obstacleGrid[i][0] ===0 && obstacleGrid[i-1][0] === 1) ? 1: 0;
  }
  for(var j = 1; j<C; j++) {
    obstacleGrid[0][j] = (obstacleGrid[0][j] ===0 && obstacleGrid[0][j-1] ===1) ? 1: 0;
  }
  for(var i = 1; i<R; i++) {
    for(var j = 1; j<C; j++) {
      if(obstacleGrid[i][j] ===0) {
        obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1];
      } else {
        obstacleGrid[i][j] = 0;
      }
    }
  }
  return obstacleGrid[R-1][C-1];
};
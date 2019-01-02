/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  var dp = [];
  dp[0]=0;
  for(var i = 1; i<=n; i++) {
    dp[i] = n;
  }
  for(var i = 0; i<=n; i++) {
    for (var j =1; i+j*j <=n; j++) {
      dp[i+j*j]= Math.min(dp[i+j*j], dp[i]+1);
    }
  }
  return dp[n];
};
console.log(numSquares(12));
console.log(numSquares(13));
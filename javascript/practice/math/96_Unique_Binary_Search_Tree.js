/**
 * @param {number} n
 * @return {number}
 */
/// Catalan number
var numTrees = function(n) {
  var dp = [];
  for(var i = 0; i <=n; i++) dp[i]=0;
  dp[0] =1;
  dp[1] =1;
  for(var i = 2; i <=n; i++) {
    for(var j = 0; j<i; j++) {
      dp[i] += dp[j] * dp[i-j-1];
    }
  }
  return dp[n];
};

console.log(numTrees(3));
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs.sort((a, b) => {
    return a[0]-b[0];
  });
  var N = pairs.length;
  var dp = [];
  for(var i = 0; i<N; i++) {
    dp[i] = 1;
  }

  for(var j = 1; j<N; j++) {
    for(var i = 0; i<j; i++) {
      if(pairs[i][1] <pairs[j][0]) {
        dp[j] = Math.max(dp[j], dp[i]+1);
      }
    }
  }
  var ans = 0;
  for(var i=0; i<dp.length; i++) {
    var x = dp[i];
    if(x>ans) ans = x;
  }
  return ans;
};

console.log(findLongestChain([[1,2], [2,3], [3,4]]));
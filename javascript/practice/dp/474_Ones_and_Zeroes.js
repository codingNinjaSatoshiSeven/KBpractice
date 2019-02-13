/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  var dp = [];
  for(var i=0; i<=m; i++) {
    dp.push([]);
    for(var j=0; j<=n;j++) {
      dp[i][j] = 0;
    }
  }
  for(var i = 0; i<strs.length;i++) {
    var str = strs[i];
    var zeros = 0, ones = 0;
    for(var j = 0; j<str.length;j++) {
      if(str[j] === '0') {
        zeros++;
      } else {
        ones++;
      }
    }
    for(var a = m; a>=zeros; a--) {
      for(var b = n; b>=ones; b--) {
        dp[a][b] = Math.max(dp[a][b], dp[a-zeros][b-ones]+1)
      }
    }
  }
  return dp[m][n];
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));
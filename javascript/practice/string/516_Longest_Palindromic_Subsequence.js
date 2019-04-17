///TODO: REVIEW
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  var n = s.length, res = 0;
  var dp = [];
  for (var i = 0; i<=n; i++) {
    dp[i] =1;
  }
  for (var i = n-1; i>=0; i--) {
    var len = 0;
    for (var j = i+1; j<n; j++) {
      var t = dp[j];
      if(s[i] === s[j]) {
        dp[j] = len+2;
      }
      len = Math.max(len, t);
    }
  }
  for(var i = 0; i<dp.length; i++) {
    res = Math.max(res, dp[i]);
  }
  return res;
};

console.log(longestPalindromeSubseq("bbbab"));
console.log(longestPalindromeSubseq("cbbd"));
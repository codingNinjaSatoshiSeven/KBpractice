/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if(s.length===0 || (s.length>1 && s[0] === '0')) return 0;
  var dp = [1];
  for(var i = 1; i<s.length+1;i++) {
    dp[i] = 1;
  }
  for(var i = 1; i<dp.length; i++) {
    dp[i] = s[i-1]=== '0' ? 0 : dp[i-1];
    if(i>1 && (s[i-2] === '1' || (s[i-2]==='2' && s[i-1] <='6'))) {
      dp[i]+=dp[i-2];
    }
  }
  return dp[s.length];
};

console.log(numDecodings("12"));
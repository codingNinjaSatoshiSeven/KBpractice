/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  var dp = [];
  for( var i = 0; i<=amount;i++) {
    dp[i] = 0;
  }
  dp[0]=1;
  for (var i = 0; i< coins.length; i++) {
    var coin = coins[i];
    for(var j = coin; j<=amount;j++) {
      dp[j]+=dp[j-coin];
    }
  }
  return dp[amount];
};

console.log(change(5, [1,2,5]));
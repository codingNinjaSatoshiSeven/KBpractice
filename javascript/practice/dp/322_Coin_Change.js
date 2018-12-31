/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  var dp = [];
  for(var i = 0; i <=amount; i++) {
    dp[i] = amount+1;
  }
  dp[0] = [0];
  for(var i = 1; i <=amount; i++) {
    for (var j = 0; j< coins.length; j++) {
      if(coins[j] <=i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return (dp[amount] > amount) ? -1 : dp[amount];
};

console.log(coinChange([1,2,5], 11));
console.log(coinChange([2], 3));
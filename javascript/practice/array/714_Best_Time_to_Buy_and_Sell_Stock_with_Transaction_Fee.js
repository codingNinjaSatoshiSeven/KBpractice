/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  var cash = 0, hold = -prices[0];
  for(var i = 1; i< prices.length; i++) {
    cash = Math.max(cash, hold+prices[i] - fee);
    hold = Math.max(hold, cash-prices[i]);
  }
  return cash;
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
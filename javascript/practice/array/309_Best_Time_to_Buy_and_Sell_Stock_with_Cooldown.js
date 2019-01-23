/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var buy = Number.MIN_SAFE_INTEGER, preBuy = 0, sell=0, preSell=0;
  for(var i=0; i<prices.length;i++) {
    var price = prices[i];
    preBuy = buy;
    buy = Math.max(preSell-price, preBuy);
    preSell = sell;
    sell = Math.max(preBuy+price, preSell);
  }
  return sell;
};

console.log(maxProfit([1,2,3,0,2]));
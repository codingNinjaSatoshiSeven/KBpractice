/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  return Math.floor((Math.sqrt(8*n+1)-1) /2);
};

console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
console.log(arrangeCoins(1));
console.log(arrangeCoins(0));
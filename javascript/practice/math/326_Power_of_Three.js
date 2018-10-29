/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n === 0) return false;
  var res = Math.round(Math.log(n) / Math.log(3));
  return Math.pow(3, res) === n;
};

console.log(isPowerOfThree(3));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(45));
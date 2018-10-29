/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if (n === 0) return 1;
  var res = 10, cnt = 9;
  for (var i = 2; i <= n; i++) {
    cnt *= (11-i);
    res += cnt;
  }
  return res;
};

console.log(countNumbersWithUniqueDigits(0));
console.log(countNumbersWithUniqueDigits(1));
console.log(countNumbersWithUniqueDigits(2));
console.log(countNumbersWithUniqueDigits(3));
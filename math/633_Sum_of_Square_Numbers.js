/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  var map = {};
  for (var i = 0; i <= Math.sqrt(c); i++) {
    var sq = i * i;
    map[sq] = i;
  }
  for (var key in map) {
    var diff = c - (+key);
    if (diff in map) return true;
  }
  return false;
};

console.log(judgeSquareSum(5));
console.log(judgeSquareSum(3));
console.log(judgeSquareSum(4));
console.log(judgeSquareSum(6));
console.log(judgeSquareSum(0));
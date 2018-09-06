/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  var a = 0, b = Math.round(Math.sqrt(c));
  while (a <= b) {
    if (a*a + b*b === c) return true;
    else if  ( a*a + b*b <c) a++;
    else b--;
  }
  return false;
};

console.log(judgeSquareSum(5));
console.log(judgeSquareSum(3));
console.log(judgeSquareSum(4));
console.log(judgeSquareSum(6));
console.log(judgeSquareSum(0));
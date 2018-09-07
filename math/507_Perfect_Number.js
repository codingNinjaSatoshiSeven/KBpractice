///TODO: NEED OPTIMIZE
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num <= 1) return false;
  var sum = 0;
  for (var i = 1; i <= num /2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
};

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(27));
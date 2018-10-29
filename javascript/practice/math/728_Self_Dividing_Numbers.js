/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  var result = [];
  for (var i = left; i <= right; i++) {
    var digits = String(i).split("");
    var good = true;
    for (var j = 0; j < digits.length; j++) {
      var d = +digits[j];
      if (d === 0) {
        good = false;
        break;
      }
      if ( i % d !== 0) {
        good = false;
        break;
      }
    }
    if (good) {
      result.push(i);
    }
  }
  return result;
};

console.log(selfDividingNumbers(1, 22));
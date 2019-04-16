///TODO: REVIEW
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  var isNegative = '';
  if (numerator * denominator < 0){
    isNegative = '-';
  }
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);

  var ans = Math.floor(numerator / denominator);
  var rem = numerator % denominator;
  if (!rem) {
    return isNegative + ans;
  }
  var result = [], hash = [];
  hash.push(rem);
  while(rem) {
    rem *=10;
    var num = Math.floor(rem / denominator);
    rem %=  denominator;
    var pos = hash.indexOf(rem);
    result.push(num);
    hash.push(rem);
    if(pos !== -1) {
      result.splice(pos, 0, '(');
      result.push(')');
      break;
    }
  }
  return isNegative + ans + '.' + result.join('');
};

console.log(fractionToDecimal(1,2));
console.log(fractionToDecimal(2,1));
console.log(fractionToDecimal(2,3));
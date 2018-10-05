/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if( num === 0) return "0";
  var res = "";
  var positive = num > 0;
  while (num !== 0) {
    res = Math.abs(num %7).toString() + res;
    if (num > 0) {
      num = Math.floor( num / 7);
    } else {
      num = Math.ceil( num / 7);
    }
  }
  return positive ? res: "-"+res;
};

console.log(convertToBase7(100));
console.log(convertToBase7(-7));
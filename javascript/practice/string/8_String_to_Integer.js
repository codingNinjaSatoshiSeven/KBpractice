/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var res = parseInt(str);
  if(res > 2147483647) {
    res = 2147483647;
  } else if ( res < -2147483648) {
    res = -2147483648;
  }
  return isNaN(res) ? 0 : res;
};
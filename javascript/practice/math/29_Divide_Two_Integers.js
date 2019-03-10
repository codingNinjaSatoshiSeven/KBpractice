/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  var MAX_INT = ~(1<<31); //~ is bitwise not
  // << is zero fill left shift:
  //Shifts left by pushing zeros in from the right and let the leftmost bits fall off
  var MIN_INT = 1<<31;
  var tmp = dividend / divisor;
  var ans = tmp > 0 ? Math.floor(tmp): Math.ceil(tmp);
  return Math.min(Math.max(ans, MIN_INT), MAX_INT);
};
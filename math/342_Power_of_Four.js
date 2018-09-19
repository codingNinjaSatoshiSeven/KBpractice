///TODO: REVIEW
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  // !(num & (num - 1)) => power of 2
  // power of 4, must be divisible by 3 when -1
  return num > 0 && !(num & (num - 1)) && (num-1) %3 === 0;
};

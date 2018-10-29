/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  var res = 0;
  for (var i = 31; i >= 0; i--) {
    // x & (1 << i) check if the ith bit in x is 1
    // if ith bit of x and y are different, then
    // the evaluation is 1, otherwise evaluation is 0
    if((x & (1 << i)) ^ (y & (1 << i))) {
      res++;
    }
  }
  return res;
};

console.log(hammingDistance(4, 1));
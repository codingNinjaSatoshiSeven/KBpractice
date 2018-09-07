///TODO: REVIEW
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  var a = m, b = n;
  for (var i = 0; i < ops.length; i++) {
    a = Math.min(a, ops[i][0]);
    b = Math.min(b, ops[i][1]);
  }
  return a *b;
};
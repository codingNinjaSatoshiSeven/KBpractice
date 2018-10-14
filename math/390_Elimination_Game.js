///TODO: REVIEW
/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  return helper(n, true);
};

function helper(n, leftToRight) {
  if (n === 1) return 1;
  if (leftToRight) {
    return 2 * helper(Math.floor(n/2), false);
  } else {
    return 2 * helper(Math.floor(n/2), true) -1 + n %2;
  }
}
///TODO: REVIEW OPTIMIZE
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  var arr = matrix.reduce(function (a, b) {
      return a.concat(b)
  }, []).sort(function (a, b) {return a - b})

  return arr[k-1];
};

console.log(kthSmallest([
  [ 1,  5,  9],
  [10, 11, 13],
  [12, 13, 15]
], 8));
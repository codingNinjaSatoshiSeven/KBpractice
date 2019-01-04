/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
  var min = Number.MAX_SAFE_INTEGER;
  var max = Number.MIN_SAFE_INTEGER;
  for(var i = 0; i < A.length; i++) {
    if (min > A[i]) {
      min = A[i];
    }
    if(max < A[i]) {
      max = A[i];
    }
  }
  return Math.max(0, max-min-2*K);
};

console.log(smallestRangeI([1], 0));
console.log(smallestRangeI([0, 10], 2));
console.log(smallestRangeI([1, 3,6], 3));
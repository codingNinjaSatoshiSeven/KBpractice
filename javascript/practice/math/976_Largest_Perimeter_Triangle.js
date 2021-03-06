/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  A.sort((a,b) => {
    return a -b;
  });
  for (var i = A.length -3; i>=0; i--) {
    if(A[i] + A[i+1] > A[i+2]) {
      return A[i] + A[i+1] + A[i+2];
    }
  }
  return 0;
};

console.log(largestPerimeter([3,2,3,4]));
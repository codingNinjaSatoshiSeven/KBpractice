/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  var result = [];
  for (var i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      result.unshift(A[i]);
    } else {
      result.push(A[i]);
    }
  }
  return result;
};

console.log(sortArrayByParity([3,1,2,4]));
///TODO: OPTIMIZE
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  var sumA = 0, sumB = 0, mapA = {}, mapB = {};
  for (var i = 0; i < A.length; i++) {
    sumA += A[i];
    if (!mapA[A[i]]){
      mapA[A[i]] = 1;
    } else {
      mapA[A[i]]++;
    }
  }
  for (var i = 0; i < B.length; i++) {
    sumB += B[i];
    if (!mapB[B[i]]){
      mapB[B[i]] = 1;
    } else {
      mapB[B[i]]++;
    }
  }
  var diff = Math.round((sumA - sumB) / 2);
  var result = [];
  for (var key in mapA) {
    var keyB = (+key) - diff;
    if (mapB[keyB]) {
      result = [ +key, +keyB];
    }
  }
  return result;
};

console.log(fairCandySwap([1,1], [2,2]));
console.log(fairCandySwap([1,2], [2,3]));
console.log(fairCandySwap([2], [1,3]));
console.log(fairCandySwap([1,2,5], [2,4]));
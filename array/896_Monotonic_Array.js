/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  var mon = 0, isMon = true;
  if (!A || A.length <= 1) return true;
  for (var i = 1; i < A.length; i++) {
    var diff = A[i] - A[i-1];
    if (!mon) {
      if (diff !== 0) {
        mon = diff > 0 ? 1 : -1;
      }
    } else {
      if (diff === 0) {
        continue;
      }
      var cur = diff > 0 ? 1 : -1;
      if (mon !== cur && cur !==0) {
        return false;
      }
    }
  }
  return true;
};

console.log(isMonotonic([1,2,2,3]));
console.log(isMonotonic([6,5,4,4]));
console.log(isMonotonic([1,3,2]));
console.log(isMonotonic([1,2,4,5]));
console.log(isMonotonic([1,1,1]));
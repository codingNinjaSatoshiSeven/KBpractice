/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  var map = {};
  for (var i = 0; i< A.length; i++) {
    var value = A[i];
    if(!map[value]) {
      map[value] = true;
    } else {
      return value;
    }
  }
};

console.log(repeatedNTimes([1,2,3,3]));
console.log(repeatedNTimes([2,1,2,5,3,2]));
console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  if(!A || A.length <3) return false;
  if(A[0] >= A[1]) return false;
  var flip = 0;
  var prev = 1;
  for(var i = 2; i < A.length; i++) {
    var diff = A[i] - A[i-1];
    diff = diff >= 0 ? 1 : -1;
    var res = diff * prev;
    if (res >= 0){ // same sign

    } else {
      flip++;
    }
    prev = diff;
  }
  return flip ===1;
};

console.log(validMountainArray([2,1]));
console.log(validMountainArray([3,5,5]));
console.log(validMountainArray([0,3,2,1]));
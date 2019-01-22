/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  var ans = 0;
  for (var i = 0; i<A[0].length; i++) {
    for(var j = 0; j<A.length-1; j++) {
      if(A[j].charCodeAt(i) > A[j+1].charCodeAt(i)) {
        ans++;
        break;
      }
    }
  }
  return ans;
};

console.log(minDeletionSize(["cba","daf","ghi"]));
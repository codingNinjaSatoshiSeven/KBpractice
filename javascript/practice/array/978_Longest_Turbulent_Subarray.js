/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
  var n = A.length;
  var ans = 1;
  var anchor = 0;
  for (var i = 1; i<n; i++) {
    var diff;
    if(A[i-1] === A[i]) {
      diff = 0;
    } else if (A[i-1] <A[i]) {
      diff= -1;
    } else {
      diff = 1;
    }
    var diff2;
    if(A[i] === A[i+1]) {
      diff2 = 0;
    } else if (A[i] <A[i+1]) {
      diff2= -1;
    } else {
      diff2 = 1;
    }
    if (diff === 0) {
      anchor = i; // update anchor
    } else if (i === n-1 || diff * diff2 !== -1) {
      ans = Math.max(ans, i- anchor +1);
      anchor = i;
    }
  }
  return ans;
};

console.log(maxTurbulenceSize([9,4,2,10,7,8,8,1,9]));
console.log(maxTurbulenceSize([4,8,12,16]));
console.log(maxTurbulenceSize([100]));
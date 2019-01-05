/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  var n = S.length;
  var lo = 0, hi = n;
  var ans = []
  for (var i =0; i<n; i++) {
    if(S[i] ==='I') ans[i] = lo++;
    else ans[i] = hi--;
  }
  ans[n] = lo;
  return ans;
}

console.log(diStringMatch("IDID"));
console.log(diStringMatch("III"));
console.log(diStringMatch("DDI"));
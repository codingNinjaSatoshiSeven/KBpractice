/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function(S) {
  var n = S.length;
  var p = [0];
  for(var i = 0; i< n; i++) {
    p[i+1] = p[i] + (S[i] === '1' ? 1: 0);
  }
  var ans = Number.MAX_SAFE_INTEGER;
  for (var i = 0; i<=n; i++) {
    ans = Math.min(ans, p[i] + n -i -(p[n]-p[i]));
  }
  return ans;
};

console.log(minFlipsMonoIncr("010110"));
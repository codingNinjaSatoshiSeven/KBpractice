///TODO: REVIEW
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
  var n = A.length;
  var p = [0];
  for (var i =0; i<n; i++) {
    p[i+1] = p[i]+A[i];
  }
  var count = [];
  for(var i = 0;i<K; i++) {
    count[i] =0;
  }
  for(var i = 0; i< p.length; i++) {
    var x = p[i];
    count[(x%K+K)%K]++;
  }
  var ans = 0;
  for(var i = 0; i<count.length; i++) {
    var v = count[i];
    ans += v*(v-1) /2;
  }
  return ans;
};

console.log(subarraysDivByK([4,5,0,-2,-3,1], 5));
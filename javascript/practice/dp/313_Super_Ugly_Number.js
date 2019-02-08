///TODO: review
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  var dp = [], idx = [];
  for(var i = 0 ;i <n; i++) {
    dp[i] = 1;
  }
  for(var i = 0; i<primes.length; i++) {
    idx[i] = 0;
  }
  for(var i =1; i<n; i++) {
    dp[i] = Number.MAX_SAFE_INTEGER;
    for(var j = 0; j<primes.length; j++) {
      dp[i] = Math.min(dp[i], dp[idx[j]] * primes[j]);
    }
    for(var j = 0; j<primes.length; j++) {
      if(dp[i] === dp[idx[j]] * primes[j]) {
        idx[j]++;
      }
    }
  }
  return dp[dp.length-1];
};

console.log(nthSuperUglyNumber(12, [2,7,13,19]));
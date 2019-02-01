/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  var ans = 0, d = 2;
  while(n>1) {
    while(n%d ===0) {
      ans+=d;
      n /=d;
    }
    d++;
  }
  return ans;
};

console.log(minSteps(3));
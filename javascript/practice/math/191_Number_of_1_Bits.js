/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  var count = 0;
  for (var i= 0; i<=31; i++) {
    if((n & (1 << i)) !== 0) count++;
  }
  return count;
};

console.log(hammingWeight(4)); //1
console.log(hammingWeight(11)); //3
console.log(hammingWeight(128)); //1
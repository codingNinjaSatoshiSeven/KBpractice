/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  while(m<n) n &= (n-1);
  return n;
};

console.log(rangeBitwiseAnd(5,7));
console.log(rangeBitwiseAnd(0,1));
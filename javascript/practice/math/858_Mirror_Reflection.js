/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function(p, q) {
  var g = gcd(p, q);
  p = Math.floor(p/g);
  p %= 2;
  q = Math.floor(q/g);
  q %= 2;
  if(p === 1 && q ===1) return 1;
  return p === 1 ? 0: 2;
};

function gcd(a, b) {
  if(a===0) return b;
  return gcd(b%a, a);
}

console.log(mirrorReflection(2,1));
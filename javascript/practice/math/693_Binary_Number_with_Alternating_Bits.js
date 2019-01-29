/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  n = n.toString(2);
  for(var i = 1; i < n.length; i++) {
    if(n[i] === n[i-1]) return false;
  }
  return true;
};

console.log(hasAlternatingBits(5));
console.log(hasAlternatingBits(7));
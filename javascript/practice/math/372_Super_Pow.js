/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
  var res = 1;
  for (var i = 0; i < b.length; i++) {
    res = pow(res, 10) * pow(a, b[i]) % 1337;
  }
  return res;
};

function pow(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x % 1337;
  var n1 = Math.floor(n/2);
  return pow(x%1337, n1) * pow(x%1337, n-n1) % 1337
}

console.log(superPow(2, [3]));
console.log(superPow(2, [1,0]));
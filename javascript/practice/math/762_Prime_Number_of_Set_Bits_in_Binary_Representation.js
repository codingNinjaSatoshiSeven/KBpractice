/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
  var PRIME_SET = [2,3,5,7,11,13,17,19];
  // only need to up to 19 because 10^6 < 2^20
  var res = 0;
  for (var i = L; i<=R; i++) {
    if(PRIME_SET.indexOf(bitCount(i))!== -1) {
      res++;
    }
  }
  return res;
};

function bitCount(n) {
  var b;
  var result = 0;
  b = n.toString(2);
  for (var i = 0; i < b.length; i++) {
      if (b.charAt(i) === "1") {
          result++;
      }
  }
  return result;
}

console.log(countPrimeSetBits(6, 10));
console.log(countPrimeSetBits(10, 15));
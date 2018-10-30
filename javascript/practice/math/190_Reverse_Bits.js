//TODO: REVIEW
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  var result = 0;
  for (var i = 0; i < 32; i++) {
    result |= (n >> i & 0x1) << (31 - i);
  }
  return result >>> 0;

};

console.log(reverseBits(43261596));
///TODO: REVIEW
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  if (b === 0 ) return a;
  var sum = a ^ b; //bitwise XOR
  var carry = (a & b) << 1; //bitwise AND
  return getSum(sum, carry);
};

console.log(getSum(2,1));
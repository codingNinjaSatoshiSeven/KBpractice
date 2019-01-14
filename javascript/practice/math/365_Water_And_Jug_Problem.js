/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  return z === 0 || ( x+y >=z && z % gcd(x,y) === 0);
};

function gcd(x, y) {
  return y === 0 ? x: gcd(y, x %y);
}

console.log(canMeasureWater(3,5,4));
console.log(canMeasureWater(2,6,5));
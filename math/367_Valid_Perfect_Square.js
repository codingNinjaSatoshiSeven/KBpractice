/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) return true;
  for (var i = 2; i < num; i++) {
    if (i*i === num) return true;
    else if (i*i > num) return false;
  }
  return false;
};

console.log(isPerfectSquare (16));
console.log(isPerfectSquare (14));
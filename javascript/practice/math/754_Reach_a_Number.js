/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
  target = Math.abs(target);
  var k = 0;
  while (target >0) {
    k++;
    target -=k;
  }
  return target %2 === 0 ? k : k+1+ k%2;
};

console.log(reachNumber(3));
console.log(reachNumber(2));
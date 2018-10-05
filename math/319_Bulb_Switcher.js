/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  var count = 1;
  while (count * count <= n) count++;
  return count -1;
};

console.log(bulbSwitch(4));
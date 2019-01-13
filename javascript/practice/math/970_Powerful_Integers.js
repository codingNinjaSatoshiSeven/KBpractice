/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
  var seen = {};
  for(var i = 0; i< 18&& Math.pow(x,i) <=bound; i++) {
    for (var j = 0; j<18&& Math.pow(y,j)<=bound; j++) {
      var v = Math.pow(x,i) + Math.pow(y, j);
      if (v <=bound) {
        seen[v] = v;
      }
    }
  }
  return Object.values(seen);
};

console.log(powerfulIntegers(2,3,10));
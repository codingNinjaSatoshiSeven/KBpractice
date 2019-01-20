/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  var map ={}
  for(var i=0;i<deck.length; i++) {
    var val = deck[i];
    map[val] = map[val] ? map[val]+1: 1;
  }
  var g = -1;
  for(var key in map) {
    if(map[key] >0) {
      if(g===-1) {
        g= map[key];
      } else {
        g=gcd(g,map[key]);
      }
    }
  }
  return g >=2;
};

function gcd(x, y) {
  return x=== 0 ? y: gcd(y%x, x);
}

console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]));
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]));
console.log(hasGroupsSizeX([1]));
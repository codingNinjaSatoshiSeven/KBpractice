/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  var num = candies.length / 2; 
  var map = {};
  for (var i = 0; i < candies.length; i++) {
    if (!map[candies[i]]) {
      map[candies[i]] = true;
    }
  }
  return Math.min(num, Object.keys(map).length);
};

var a = [1,1,2,2,3,3];
console.log(distributeCandies(a));
var b = [1,1,2,3];
console.log(distributeCandies(b));
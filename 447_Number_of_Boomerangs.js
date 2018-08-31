///TODO: Need to Review
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  var ans = 0;
  for (var i = 0; i < points.length; i++) {
    var map = {};
    for (var j = 0; j < points.length; j++) {
      var dx = points[i][0] - points[j][0];
      var dy = points[i][1] - points[j][1];
      var distance = dx * dx + dy * dy;
      if (!(distance in map)) {
        map[distance] = 1;
      } else {
        map[distance]++;
      }
    }
    if (Object.keys(map).length >= 2) {
      for (var key in map) {
        ans += map[key] * (map[key]-1);
      }
    }
  }
  return ans;
};

var a = [[0,0],[1,0],[2,0]];
console.log(numberOfBoomerangs(a));
a = [[1,1],[1,2]];
console.log(numberOfBoomerangs(a));
a = [[0,0],[1,0],[-1,0],[0,1],[0,-1]];
console.log(numberOfBoomerangs(a));
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
  var n = points.length;
  var ans = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      for (var k = 0; k < n; k++) {
        ans = Math.max(ans, area(points[i], points[j], points[k]));
      }
    }
  }
  return ans;
};

function area(p, q, r) {
  return Math.abs(p[0]*q[1] + q[0]*r[1]+r[0]*p[1] - p[1]* q[0] - q[1] *r[0] - r[1]*p[0]) /2;
}

console.log(largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]));
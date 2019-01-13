/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  points.sort((a, b) => {
    return Math.pow(a[0],2) + Math.pow(a[1], 2) - Math.pow(b[0],2) - Math.pow(b[1], 2);
  });
  var res = [];
  for (var i = 0; i<K; i++) {
    res.push(points[i]);
  }
  return res;
};

console.log(kClosest([[3,3],[5,-1],[-2,4]], 2));
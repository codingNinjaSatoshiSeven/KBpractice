/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
  var set = new Set();
  set.add(d(p1, p2));
  set.add(d(p1, p3));
  set.add(d(p1, p4));
  set.add(d(p2, p3));
  set.add(d(p2, p4));
  set.add(d(p3, p4));
  return !set.has(0) && set.size ===2;
};

function d(a, b) {
  return Math.pow(a[0]-b[0], 2) + Math.pow(a[1]-b[1], 2);
}
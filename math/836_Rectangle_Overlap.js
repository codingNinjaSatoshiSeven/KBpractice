/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  var x1min = Math.min(rec1[0], rec1[2]);
  var x1max = Math.max(rec1[0], rec1[2]);
  var x2min = Math.min(rec2[0], rec2[2]);
  var x2max = Math.max(rec2[0], rec2[2]);
  var y1min = Math.min(rec1[1], rec1[3]);
  var y1max = Math.max(rec1[1], rec1[3]);
  var y2min = Math.min(rec2[1], rec2[3]);
  var y2max = Math.max(rec2[1], rec2[3]);

  if (x1min <= x2min && y1min <= y2min) {
    if (x1max <= x2min) {
      return false;
    }
    if (y1max <= y2min) return false;
  }
  if (x1min > x2min && y1min <= y2min) {
    if (x2max <= x1min) {
      return false;
    }
    if (y1max <= y2min) return false;
  }
  if (x1min > x2min && y1min > y2min) {
    if (x2max <= x1min) {
      return false;
    }
    if (y2max <= y1min) return false;
  }
  if (x1min <= x2min && y1min > y2min) {
    if (x1max <= x2min) {
      return false;
    }
    if (y2max <= y1min) return false;
  }
  return true;
};

console.log(isRectangleOverlap([0,0,2,2], [1,1,3,3]));
console.log(isRectangleOverlap([0,0,1,1], [1,0,2,1]));
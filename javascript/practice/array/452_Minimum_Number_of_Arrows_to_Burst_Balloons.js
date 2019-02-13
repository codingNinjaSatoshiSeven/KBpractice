/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (!points || points.length ===0) return 0;
  points.sort((a,b) =>{
    if(a[0] <b[0]) {
      return -1;
    } else if (a[0]>b[0]) {
      return 1;
    } else { // a[0]=b[0]
      if(a[1] <b[1]) {
        return -1;
      } else if (a[1]>b[1]) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  var res = 1, end = points[0][1];
  for(var i = 1; i<points.length; i++) {
    if(points[i][0] <=end) {
      end = Math.min(end, points[i][1]);
    } else {
      res++;
      end= points[i][1];
    }
  }
  return res;
};

console.log(findMinArrowShots([[10,16], [2,8], [1,6], [7,12]]));
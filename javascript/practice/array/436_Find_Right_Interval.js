/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
function Interval(start, end) {
  this.start = start;
  this.end = end;
}
/**
 * @param {Interval[]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
  var res = [], v = [];
  var m = {};
  for (var i =0; i< intervals.length; i++) {
    m[intervals[i].start] = i;
    v.push(intervals[i].start);
  }
  v.sort((a,b) => {
    return b-a;
  });
  for(var i=0; i<intervals.length; i++) {
    var a = intervals[i];
    for(var j = 0; j<v.length; j++) {
      if(v[j] <a.end) break;
    }
    res.push(j>0 ? m[v[j-1]]: -1);
  }
  return res;
};

var a  = [ new Interval(3,4), new Interval(2,3), new Interval(1,2)];
console.log(findRightInterval(a));
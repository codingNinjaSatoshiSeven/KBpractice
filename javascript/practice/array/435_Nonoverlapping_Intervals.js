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
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a,b) => {
    return a.start - b.start;
  });
  var res = 0, n = intervals.length, last = 0;
  for(var i = 1; i<n; i++) {
    if(intervals[i].start < intervals[last].end) {
      ++res;
      if(intervals[i].end < intervals[last].end) {
        last = i;
      }
    } else {
      last = i;
    }
  }
  return res;
};

var a = [ new Interval(1,2), new Interval(2,3), new Interval(3,4), new Interval(1,3)];
console.log(eraseOverlapIntervals(a));
var b = [ new Interval(1,2), new Interval(1,2), new Interval(1,2)];
console.log(eraseOverlapIntervals(b));
var c = [ new Interval(1,2), new Interval(2,3)];
console.log(eraseOverlapIntervals(c));
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  intervals.sort((i1, i2) => i1.start > i2.start ? 1 : -1 );
  var res = [];
  if (intervals.length > 0) {
    res.push(intervals[0]);
  }
  for (var i = 1; i < intervals.length; i++) {
    var last = res.pop();
    var cur = intervals[i];
    if(cur.start > last.end) {
      res.push(last);
      res.push(cur);
    } else {
      last.end = Math.max(last.end, cur.end);
      res.push(last);
    }
  }
  return res;
};

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
 * @param {Interval[]} A
 * @param {Interval[]} B
 * @return {Interval[]}
 */
var intervalIntersection = function(A, B) {
  var ans = [];
  var i = 0, j = 0;
  while(i<A.length && j <B.length) {
    var lo = Math.max(A[i].start, B[j].start);
    var hi = Math.min(A[i].end, B[j].end);
    if(lo <=hi) {
      ans.push(new Interval(lo, hi));
    }
    if(A[i].end <B[j].end) {
      i++;
    } else {
      j++;
    }
  }
  return ans;
};
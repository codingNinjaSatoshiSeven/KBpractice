/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
  var n = A.length;
  var ans = 0, base = 0;
  while(base < n) {
    var end = base;
    // if base is a left-boundary
    if(end+1 < n && A[end] < A[end+1]) {
      // set end to the peak of this potential mountain
      while(end +1 <n && A[end]<A[end+1]) {
        end++;
      }
      //if end is really a peak..
      if(end+1 <n && A[end] > A[end+1]) {
        //set end to the right-boundary of mountain
        while(end+1<n && A[end] >A[end+1]) {
          end++;
        }
        // record candidate answer
        ans = Math.max(ans, end-base+1);
      }
    }
    base = Math.max(end, base+1);
  }
  return ans;
};

console.log(longestMountain([2,1,4,7,3,2,5]));
console.log(longestMountain([2,2,2]));
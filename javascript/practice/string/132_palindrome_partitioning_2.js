/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  let n = s.length;
  let results = [];
  for(let i = 0; i < n; i++) results[i] = 0;
  for(let i = 1; i < n; i++) {
    if(isPal(s, 0, i)) {
      continue;
    }
    results[i] = Number.MAX_VALUE;
    for(let p = 0; p < i; p++) {
      if(isPal(s, p+1, i)) {
        results[i] = Math.min(results[i], 1+results[p]);
      }
    }
  }
  return results[n-1];
};

function isPal(s, start, end) {
  while(start < end) {
    if(s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
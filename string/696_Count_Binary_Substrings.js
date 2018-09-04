///TODO: REVIEW
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  var sum = 0, prev = 0, cur = 1;
  for (var i = 1; i < s.length; i++) {
    if (s[i-1] !== s[i]) {
      sum += Math.min(prev, cur);
      prev = cur;
      cur = 1;
    } else {
      cur++;
    }
  }
  sum += Math.min(prev, cur);
  return sum;
};

console.log(countBinarySubstrings("00110011"));
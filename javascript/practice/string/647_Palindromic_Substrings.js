/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  var n = s.length, ans = 0;
  for(var center = 0; center <=2*n-1; ++center) {
    var left = Math.floor(center/2);
    var right = left + center %2;
    while(left >=0 && right <n && s[left] === s[right]) {
      ans++;
      left--;
      right++;
    }
  }
  return ans;
};

console.log(countSubstrings("abc"));
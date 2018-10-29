/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  if (s.length ===0) return -1;
  var map = {};
  for (var i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  var target = -1;
  for ( var i = 0; i < s.length; i++) {
    if (map[s[i]] ===1) {
      return i;
    } 
  }
  return target;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  s = s.split("");
  t = t.split("");
  for (var i = 0; i < t.length; i++) {
    if (s[0] === t[i]) {
      s.shift();
    }
  }
  return s.length === 0;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("acb", "ahbgdc"));
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  if (s.length === 1) return true;
  var aCount = 0, lCount = 0;
  if (s[0] === "A") aCount++;
  for (var i = 1; i < s.length; i++) {
    if (s[i] === "A") {
      aCount++;
    }
    if (s[i] === "L" && s[i-1] === "L" && s[i+1] === "L") {
      lCount++;
    }
    if (aCount > 1 || lCount >= 1) {
      return false;
    }
  }
  return true;
}

console.log(checkRecord("PPALLP"));
console.log(checkRecord("PPALLL"));
console.log(checkRecord("LALL"));
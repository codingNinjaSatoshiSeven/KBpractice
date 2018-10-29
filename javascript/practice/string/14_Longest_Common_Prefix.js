/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var prefix = "";
  if (strs.length === 0) return prefix;
  var map = {};
  var maxLength = 0, maxLengthIndex = -1, minLength = Number.POSITIVE_INFINITY;
  for (var i = 0; i < strs.length; i++) {
    if (strs[i].length > maxLength) {
      maxLength = strs[i].length;
      maxLengthIndex = i;
    }
    if (strs[i].length < minLength) {
      minLength = strs[i].length;
    }
  }
  if (minLength === 0) return prefix;
  for (var i = 0; i < minLength; i++) {
    var allSame = true;
    for (var j = 0; j < strs.length; j++) {
      var str = strs[j];
      if (!map[i]) {
        map[i] = str[i];
      } else {
        if (map[i] !== str[i]) {
          allSame = false;
          break;
        }
      }
    }
    if (allSame) {
      prefix +=strs[0][i];
    } else {
      break;
    }
  }
  return prefix;
};

var a = ["flower","flow","flight"];
console.log(longestCommonPrefix(a));

var b = ["dog","racecar","car"];
console.log(longestCommonPrefix(b));

var c = ["c", "c"];
console.log(longestCommonPrefix(c));
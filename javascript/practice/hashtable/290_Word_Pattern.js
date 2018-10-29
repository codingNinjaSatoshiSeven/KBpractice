/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var map = {}, inverseMap = {};
  var strArr = str.split(" ");
  if (pattern.length !== strArr.length) return false;
  for (var i = 0; i < pattern.length; i++) {
    if (!map[pattern[i]]) {
      map[pattern[i]] = strArr[i];
      if (inverseMap[strArr[i]]) return false;
      inverseMap[strArr[i]] = pattern[i];
    } else if (map[pattern[i]]) {
      if (map[pattern[i]] !== strArr[i]) {
        return false;
      }
    }
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("abba", "dog dog dog dog"));
console.log(wordPattern("ab", "dog dog"));

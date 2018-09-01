/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  var r = [], m = [];
  for (var i = 0 ; i < ransomNote.length; i++) {
    var c = findCode(ransomNote[i]);
    r[c] = !r[c] ? 1: r[c] + 1;
  }
  for (var i = 0 ; i < magazine.length; i++) {
    var c = findCode(magazine[i]);
    m[c] = !m[c] ? 1: m[c] + 1;
  }
  var can = true;
  for (var i = 0; i< 26; i++) {
    if (r[i]) {
      if (!m[i] || m[i] < r[i]) {
        can = false;
        break;
      }
    }
  }
  return can;
};

function findCode(l) {
  return l.charCodeAt(0) - 97;
}

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
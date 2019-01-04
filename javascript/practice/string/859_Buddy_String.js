/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if(A.length !== B.length) return false;
  var a = [], b = [], diff = 0;
  for(var i = 0; i < A.length; i++) {
    if(A[i] !== B[i] && diff++ >2) return false;
    var distA = A.charCodeAt(i) - 97;
    var distB = B.charCodeAt(i) - 97;
    a[distA] = a[distA] ? a[distA]+1 : 1;
    b[distB] = b[distB] ? b[distB]+1 : 1;
  }
  for(var i = 0; i < 26; i++) {
    if (diff === 0 && a[i] > 1) return true;
    if(a[i] !== b[i]) return false;
  }
  return diff === 2;
};

console.log(buddyStrings("ab", "ba"));
console.log(buddyStrings("aa", ""));
console.log(buddyStrings("aaaaaaabc", "aaaaaaacb"));
console.log(buddyStrings("ab", "ab"));
console.log(buddyStrings("aa", "aa"));
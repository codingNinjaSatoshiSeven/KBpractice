/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  var map = {};
  for (var i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  for (var i = 0; i < t.length; i++) {
    if (!map[t[i]]) {
      return t[i];
    } else {
      map[t[i]]--;
    }
  }
};

console.log(findTheDifference('abcd', 'dacbe'));

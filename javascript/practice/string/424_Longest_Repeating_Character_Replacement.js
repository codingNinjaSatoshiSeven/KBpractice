///TODO: REVIEW
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  var res = 0, maxCount = 0, start = 0;
  var counts = [];
  for (var i = 0; i<26; i++) counts[i] = 0;
  for(var i = 0; i< s.length; i++) {
    var index = s[i].charCodeAt(0) -65; // 'A'
    counts[index]++;
    maxCount = Math.max(maxCount, counts[index]);
    while(i- start + 1 - maxCount >k) {
      var startIndex = s[start].charCodeAt(0) - 65;
      --counts[startIndex];
      ++start;
    }
    res = Math.max(res, i-start+1);
  }
  return res;
};

console.log(characterReplacement("AABABBA", 1));
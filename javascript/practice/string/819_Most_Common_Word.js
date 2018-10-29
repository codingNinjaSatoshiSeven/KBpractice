/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  paragraph = paragraph.toLowerCase();
  paragraph = paragraph.replace(/[^a-zA-Z\s]/g, "");
  paragraph = paragraph.split(" ");
  var b = {};
  var map = {}, max = 0, maxC = "";
  for (var i = 0; i < banned.length; i ++) {
    b[banned[i]] = true;
  }
  for (var i = 0; i < paragraph.length; i++) {
    var s = paragraph[i];
    if (!(s in b)) {
      if (!map[s]) {
        map[s] = 1;
      } else {
        map[s]++;
      }
      if (map[s] >= max) {
        max = map[s];
        maxC = s;
      }
    }
  }
  return maxC;
};
var p = "Bob hit a ball, the hit BALL flew far after it was hit.";
console.log(mostCommonWord(p, ["hit"]));
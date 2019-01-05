/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  var map = {};

  for (var i = 0; i< order.length; i++) {
    map[order[i]] = i;
  }
  loop1:
  for (var i = 0; i< words.length-1;i++) {
    var word1 = words[i];
    var word2 = words[i+1];
    var l = Math.min(word1.length, word2.length);
    loop2:
    for(var j = 0; j< l; j++) {
      if(word1[j] !== word2[j]) {
        if(map[word1[j]] > map[word2[j]]) {
          return false;
        } else {
          continue loop1;
        }
      }
    }
    if(word1.length> word2.length) return false;
  }
  return true;
};

console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz"));
console.log(isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz"));
console.log(isAlienSorted(["kuvp","q"], "ngxlkthsjuoqcpavbfdermiywz"));
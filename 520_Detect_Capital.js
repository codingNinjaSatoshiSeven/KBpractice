/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if (!word) return true;
  if (word.length <=1) return true;
  if (word.toUpperCase() === word) return true;
  var lowerCount = 0;
  for (var i = 1; i < word.length; i++) {
    var isCapital = (word[i].toUpperCase() === word[i]);
    if (isCapital) {
      return false;
    }
  }
  return true;
};

console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("FlaG"));
console.log(detectCapitalUse("leetcode"));
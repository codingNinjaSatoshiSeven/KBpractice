/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  var map = {};
  for (var i = 0; i < words.length; i++) {
    if(!map[words[i]]) {
      map[words[i]] = true;
    }
  }
  var maxWord = "";
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length === 1) {
      maxWord = compareWord(maxWord, word);
    } else {
      var can = true;
      for (var j = 1; j< word.length; j++) {
        var sub = word.substr(0, j);
        if (!(sub in map)) {
          can = false;
          break;
        }
      }
      if (can) {
        maxWord = compareWord(maxWord, word);
      }
    }
  }
  return maxWord;
};

function compareWord(max, cur) {
  if (max.length > cur.length) {
    return max;
  } else if (max.length < cur.length) {
    return cur;
  } else {
    return max < cur ? max : cur;
  }
}

var a = ["a", "banana", "app", "appl", "ap", "apply", "apple"];
console.log(longestWord(a));
a = ["w","wo","wor","worl", "world"];
console.log(longestWord(a));
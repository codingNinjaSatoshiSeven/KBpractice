/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  var good = new Set(words);
  for (var n = 0; n<words.length;n++) {
    var word = words[n];
    for (var i = 1; i<word.length; i++) {
      var sub = word.substring(i);
      good.delete(sub);
    }
  }
  var sum = 0;
  for(var item of good) {
    sum += item.length+1;
  }
  return sum;
};

console.log(minimumLengthEncoding(["time", "me", "bell"]));
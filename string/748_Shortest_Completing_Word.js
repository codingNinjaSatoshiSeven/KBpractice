/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  licentsePlate = licensePlate.toLowerCase();
  var map = {};
  for (var i = 0; i < licentsePlate.length; i++) {
    var val = licentsePlate[i];
    if (isLetter(val)){
      if(!map[val]) map[val] = 1;
      else map[val]++;
    }
  }
  var length = Number.POSITIVE_INFINITY;
  var answer;
  for (var i = 0; i < words.length; i++) {
    var copy = Object.assign({}, map);
    var word = words[i];
    for (var j = 0; j < word.length; j++) {
      if(copy[word[j]]) {
        copy[word[j]]--;
      }
      if(copy[word[j]] === 0) {
        delete copy[word[j]];
      }
    }
    if (Object.keys(copy).length === 0) {
      if( word.length < length) {
        length = word.length;
        answer = word;
      }
    }
  }
  return answer;
};

function isLetter(s) {
  return s.charCodeAt(0) >=97 && s.charCodeAt(0) <=122;
}

console.log(shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]));
console.log(shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"]));
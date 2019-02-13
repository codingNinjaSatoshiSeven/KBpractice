/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  var ans = [];
  for(var i = 0; i<words.length; i++) {
    var word = words[i];
    if(match(word, pattern)) {
      ans.push(word);
    }
  }
  return ans;
};

function match(word, pattern) {
  var m1 = {}, m2 ={};
  for(var i = 0;i <word.length; i++) {
    var w = word[i];
    var p = pattern[i];
    if(!m1[w]) {
      m1[w] = p;
    }
    if(!m2[p]) {
      m2[p] = w;
    }
    if(m1[w] !== p || m2[p] !== w) {
      return false;
    }
  }
  return true;
}

console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], "abb"));
/// TODO: REVIEW
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  var res = 0;
  var mask = [];
  for (var i = 0; i<26; i++) {
    mask[i] = 0;
  }
  for(var i = 0; i<words.length; i++) {
    for (var j = 0; j <words[i].length; j++) {
      mask[i] |= 1 <<(words[i][j].charCodeAt(0)-97);
    }
    for (var j = 0; j<i; j++) {
      if(!(mask[i] & mask[j])) {
        res = Math.max(res, words[i].length * words[j].length);
      }
    }
  }
  return res;
};

console.log(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]));
console.log(maxProduct(["a","ab","abc","d","cd","bcd","abcd"]));
console.log(maxProduct(["a","aa","aaa","aaaa"]));
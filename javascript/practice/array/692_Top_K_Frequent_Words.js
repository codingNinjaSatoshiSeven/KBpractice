/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  var map = {};
  for ( var i = 0; i < words.length; i++) {
    var w = words[i];
    if(!map[w]) {
      map[w] = 1;
    } else {
      map[w]++;
    }
  }
  var res = [];
  for (var key in map) {
    res.push([key, map[key]]);
  }
  res.sort((a,b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    } else {
      return a[0] > b[0] ? 1: -1;
    }
  })
  var r = [];
  for (var i = 0; i < k; i++) {
    r.push(res[i][0]);
  }
  return r;
};

console.log(topKFrequent(["the", "day", "is", "sunny", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));
console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3));
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  var map = {}, res=[];
  for(var i = 0; i < s.length -9; i++) {
    var sub = s.substr(i, 10);
    if(!map[sub]) {
      map[sub] = 1;
    } else {
      map[sub]++;
    }
  }
  for (var key in map) {
    if (map[key] >1) {
      res.push(key);
    }
  }
  return res;
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  var aArr = A.split(" ");
  var bArr = B.split(" ");
  var map = {};
  var uncommon = [];
  for (var i = 0; i < aArr.length; i++) {
    if (!map[aArr[i]]) {
      map[aArr[i]] = 1;
    } else {
      map[aArr[i]]++;
    }
  }
  for (var i = 0; i < bArr.length; i++) {
    if (map[bArr[i]]) {
      map[bArr[i]]++;
    } else {
      map[bArr[i]] = 1;
    }
  }
  for (var key in map) {
    if (map[key]===1) {
      uncommon.push(key);
    }
  }
  return uncommon;
};

var A = "this apple is sweet", B = "this apple is sour";
console.log(uncommonFromSentences(A,B));
A = "apple apple", B = "banana";
console.log(uncommonFromSentences(A,B));
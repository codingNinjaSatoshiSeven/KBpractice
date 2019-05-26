/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
  var bmax = [], res = [];
  for (let i = 0 ; i < B.length; i++) {
    var bCount = getCount(B[i]);
    for(let j = 0; j<26; j++) {
      bmax[j] = Math.max(bmax[j]|| 0, bCount[j]||0);
    }
  }
  for(let i = 0; i<A.length; i++) {
    var aCount = getCount(A[i]);
    var valid = true;
    for(let j = 0;j<26;j++) {
      if(bmax[j] !== 0) {
        if (!aCount[j] ||  aCount[j] <bmax[j]) {
          valid = false;
          break;
        }
      }
    }
    valid && res.push(A[i]);
  }
  return res;
};

function getIndex(char) {
  return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

function getCount(word) {
  var map = [];
  for (let i = 0; i<word.length; i++) {
    var idx = getIndex(word[i]);
    map[idx] = map[idx] === undefined ? 1: map[idx]+1;
  }
  return map;
}

console.log(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["e", 'o']));
console.log(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["e", 'l']));
console.log(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["e","oo"]));
console.log(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["lo","eo"]));
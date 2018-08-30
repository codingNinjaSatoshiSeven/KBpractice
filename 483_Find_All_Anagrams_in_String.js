///TODO: Need to Review
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  var parr = [], sarr = [];
  var n = p.length;
  var result = [];
  for (var i = 0; i < n; i++) {
    var code = findCode(p[i]);
    parr[code] = parr[code] ? parr[code]+1 : 1;
  }

  for (var i = 0; i < s.length; i++) {
    var code = findCode(s[i]);
    if ( i >= n) {
      var ancient = findCode(s[i-n]);
      sarr[ancient]--;
    }
    sarr[code] = sarr[code] ? sarr[code]+1 : 1;
    if (isSame(parr, sarr)) result.push(i+1-n);
  }
  return result;
};

function findCode(letter) {
  return letter.charCodeAt(0) - 97; // a is 97
}

function isSame(arr1, arr2) {
  var same = true;
  for (var i = 0; i < arr1.length; i++) {
    if (!arr1[i] && !arr2[i]) {
      continue;
    } else {
      if (arr1[i] !== arr2[i]) {
        same = false;
        break;
      }
    }
    
  }
  return same;
}

var s = "cbaebabacd", p = "abc";
console.log(findAnagrams(s,p));
s = "abab", p = "ab";
console.log(findAnagrams(s,p));
s = "acdcaeccde", p = "c";
console.log(findAnagrams(s,p));
s = "baa", p = "aa";
console.log(findAnagrams(s,p));
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  var arr = [], result = [];
  for (var i = 0; i < S.length; i++) {
    if (S[i] === C) {
      arr.push(i);
    }
  }
  var indexL = arr[0], indexH = arr[1], counter = 1;
  for (var i = 0; i < S.length; i++) {
    if (i < indexL) {
      result.push(indexL-i);
    } else if ( i < indexH) {
      var val = Math.min(i - indexL, indexH -i);
      result.push(val);
    } else {
      if (counter < arr.length-1) {
        counter++;
        indexL = indexH;
        indexH = arr[counter];
        var val = Math.min(i - indexL, indexH -i);
        result.push(val);
      } else {
        indexH = arr[arr.length-1];
        result.push(i-indexH);
      }
    }
  }
  return result;
};

console.log(shortestToChar("loveleetcode", "e"));
console.log(shortestToChar("aaba", "b"));
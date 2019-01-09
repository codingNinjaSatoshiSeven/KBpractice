/// TODO: REVIEW
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  var res = [];
  var cur = 1;
  for (var i = 0; i<n; i++) {
    res[i] = cur;
    if(cur * 10 <= n) {
      cur *=10;
    } else {
      if(cur>=n) cur = Math.floor(cur /10);
      cur+=1;
      while( cur % 10 === 0) cur = cur/10;
    }
  }
  return res;
};

console.log(lexicalOrder(13));
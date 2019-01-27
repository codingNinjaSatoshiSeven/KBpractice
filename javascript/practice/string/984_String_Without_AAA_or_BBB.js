/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
  var ans = [];
  while(A>0 || B>0) {
    var writeA = false;
    var L = ans.length;
    if(L>=2 && ans[L-1] === ans[L-2]) {
      if(ans[L-1] === 'b') {
        writeA = true;
      }
    } else {
      if(A>=B) {
        writeA = true;
      }
    }
    if(writeA) {
      A--;
      ans.push('a');
    } else {
      B--;
      ans.push('b');
    }
  }
  return ans.join('');
};

console.log(strWithout3a3b(3,5));
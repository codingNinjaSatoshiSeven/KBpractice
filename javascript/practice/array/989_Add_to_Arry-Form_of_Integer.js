/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  K = String(K).split('');
  var l = A.length >= K.length? A.length : K.length;
  var res = [], carry = 0;
  for(var i = 0; i< l; i++) {
    var m = A.length - i -1;
    var n = K.length - i - 1;
    var a = m >=0 ? +A[m] :0;
    var k = n >=0 ? +K[n] : 0;
    var temp = (a+k + carry) %10;
    res.unshift(temp);
    carry = Math.floor((a+k + carry) / 10);
  }
  if(carry !== 0) res.unshift(carry);
  return res;
};

console.log(addToArrayForm ([1,2,0,0], 34));
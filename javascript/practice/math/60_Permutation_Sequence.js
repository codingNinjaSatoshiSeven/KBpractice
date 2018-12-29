/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  var res =[];
  var num = ['1','2','3','4','5','6','7','8','9'];
  var factorial = [1];
  for(var i =1; i<n; i++) factorial[i] = factorial[i-1] *i;
  --k;
  for(var i=n; i >=1; i--) {
    var j = Math.floor(k/factorial[i-1]);
    k = k % factorial[i-1];
    res.push(num[j]);
    num.splice(j,1);
  }
  return res.join('');
};

console.log(getPermutation(4,9));
console.log(getPermutation(3,3));
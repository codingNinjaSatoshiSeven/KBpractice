/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
  var str = String(N);
  str = str.split('');
  var n = str.length, j = n;
  for (var i = n-1; i>0; i--) {
    if(str[i] >=str[i-1]) continue;
    --str[i-1];
    j = i;
  }
  for(var i = j; i<n; i++) {
    str[i] = '9';
  }
  return parseInt(str.join(''));
};

console.log(monotoneIncreasingDigits(322));
console.log(monotoneIncreasingDigits(1234));
///TODO: REVIEW
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if(num === 0 ) return '0';
  var map = '0123456789abcdef';
  var ans = '';
  for (var i = 0; i< 8; i++) {
    var n = num & 15;
    var c = map[n];
    ans = c + ans;
    num = num >> 4;
  }
  return ans.replace(/^[0]*/g, '');
};

console.log(toHex(26));
console.log(toHex(-1));
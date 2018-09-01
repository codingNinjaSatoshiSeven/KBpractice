///TODO: Need to Review
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  var result = '';
  while (n > 0) {
    var code = String.fromCharCode((n-1)%26+ 'A'.charCodeAt());
    n = Math.floor((n - 1) / 26);
    result = code + result;
  }
  return result;
};

console.log(convertToTitle(701));
console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(52));
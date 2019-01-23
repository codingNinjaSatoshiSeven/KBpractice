/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  var res = [];
  S = S.toUpperCase();
  var count = 0, n = S.length;
  for(var i = n-1; i>=0; i--) {
    if(S[i] === '-') continue;
    res.push(S[i]);
    if(++count % K === 0) res.push('-');
  }
  if(res.length>0 && res[res.length-1] === '-') {
    res.pop();
  }
  return res.reverse().join("");
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
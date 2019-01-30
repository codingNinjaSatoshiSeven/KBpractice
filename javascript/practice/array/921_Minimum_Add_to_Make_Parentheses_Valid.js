///TODO: REVIEW
/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  var ans = 0, bal = 0;
  for (var i = 0; i<S.length; i++) {
    bal += S[i] === '(' ? 1: -1;
    // it is guaranteed bal >= -1
    if (bal == -1) {
      ans++;
      bal++;
    }
  }
  return ans+bal;
};
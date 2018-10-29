///TODO: REVIEW
/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  var res = 0;
  for (var i = 1; i <= N; i++) {
    var j = i;
    var three = false;
    var two = false;
    while (j !== 0) {
      var mod = j % 10;
      if (mod === 2 || mod === 5 || mod ===6 || mod ===9) two = true;
      if (mod === 3 || mod === 4 || mod ===7) three = true;
      j = Math.floor(j/10);
    }
    if(!three && two) res++;
  }
  return res;
};


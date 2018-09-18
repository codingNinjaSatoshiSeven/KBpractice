///TODO: REVEIEW
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  var bull = 0;
  var cow = 0;
  var skeep = [], gkeep = [];
  for(var i in guess) {
    if (secret[i] === guess[i]) {
      bull++;
    } else {
      skeep.push(secret[i]);
      gkeep.push(guess[i]);
    }
  }

  for(var i in gkeep) {
    var index = skeep.indexOf(gkeep[i]);
    if (index !== -1) {
      cow++;
      skeep[index] = null;
    }
  }
  return bull+'A'+cow+'B';
};

console.log(getHint("1807", "7810"));
console.log(getHint("1123", "0111"));
console.log(getHint("11", "11"));
console.log(getHint("1122", "2211"));
console.log(getHint("1122", "1222"));

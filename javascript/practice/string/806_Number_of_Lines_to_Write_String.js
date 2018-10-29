/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
  var line = 1, overFlow = 0;
  for(var i = 0; i < S.length; i++) {
    var code = getCode(S[i]);
    var space = widths[code];

    overFlow += space;
    if (overFlow > 100) {
      overFlow = space;
      line++;
    }
  }
  return [line, overFlow];
};

function getCode(l) {
  return l.toLowerCase().charCodeAt(0) - 97;
}

console.log(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
  "abcdefghijklmnopqrstuvwxyz"));

console.log(numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
  "bbbcccdddaaa"));
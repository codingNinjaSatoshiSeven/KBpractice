/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  var targetCode = target.charCodeAt(0)- 97;
  var minCode = Number.POSITIVE_INFINITY;
  for (var i = 0; i < letters.length; i++) {
    var code = letters[i].charCodeAt(0) - 97;
    if ( code > targetCode) {
      minCode = Math.min(minCode, code);
    }
  }
  if ( minCode === Number.POSITIVE_INFINITY) {
    targetCode = targetCode - 26;
    for (var i = 0; i < letters.length; i++) {
      var code = letters[i].charCodeAt(0) - 97;
      if ( code > targetCode) {
        minCode = Math.min(minCode, code);
      }
    }
  }
  return String.fromCharCode(minCode+97);
};
console.log(nextGreatestLetter(["c", "f", "j"], "a"));
console.log(nextGreatestLetter(["c", "f", "j"], "c"));
console.log(nextGreatestLetter(["c", "f", "j"], "d"));
console.log(nextGreatestLetter(["c", "f", "j"], "g"));
console.log(nextGreatestLetter(["c", "f", "j"], "j"));
console.log(nextGreatestLetter(["c", "f", "j"], "k"));
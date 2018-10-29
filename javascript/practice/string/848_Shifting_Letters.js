/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
  for (var i = shifts.length -2; i >= 0; i--) {
    shifts[i] = shifts[i+1] + shifts[i];
  }
  var strArr = S.split("");
  for (var i = 0 ; i < strArr.length; i++) {
    var code = strArr[i].charCodeAt(0) - 97;
    code += shifts[i];
    code = code % 26;
    code = code + 97;
    strArr[i] = String.fromCharCode(code);
  }
  return strArr.join("");
};

console.log(shiftingLetters("abc", [3,5,9]));
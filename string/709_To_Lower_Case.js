/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  var arr = str.split("");
  for (var i = 0; i < arr .length; i++) {
    var code = arr[i].charCodeAt(0);
    if (code >= 65 && code <= 90) {
      arr[i] = String.fromCharCode(code+32);
    }
  }
  return arr.join("");
};
console.log(toLowerCase("Hello"));
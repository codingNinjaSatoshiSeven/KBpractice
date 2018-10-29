/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  num1 = String(num1).split("").reverse().join("");
  num2 = String(num2).split("").reverse().join("");

  var carry = 0;
  var l = num1.length > num2.length ? num1.length : num2.length;
  var i = 0;
  var result = "";
  while (i < l) {
    var cur = 0;
    var a = num1[i] ? +num1[i] : 0;
    var b = num2[i] ? +num2[i] : 0;
    cur = a + b + carry;
    if (cur > 9) {
      carry = Math.floor(cur / 10);
      cur = cur - carry * 10;
    } else {
      carry = 0;
    }
    result += cur;
    i++;
  }
  if (carry !== 0) {
    result += carry;
  }
  return result.split("").reverse().join("");
};

console.log(addStrings("199", "35"));
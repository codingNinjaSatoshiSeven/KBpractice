/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");
  var l = a.length > b.length ? a.length : b.length;
  var carry = 0, i = 0, sum = "";
  while (i < l) {
    var aa = i >= a.length ? 0: +(a[i]);
    var bb = i >= b.length ? 0: +(b[i]);
    var d;
    if (aa === 1 && bb === 1) {
      d = carry === 1 ? 1: 0;
      carry = 1;
      sum +=d;
    } else if (aa ===0 && bb ===0) {
      d = carry === 1 ? 1: 0;
      carry = 0;
      sum +=d;
    } else {
      d = carry === 1 ? 0 : 1;
      carry = carry;
      sum +=d;
    }
    i++;
  }
  if (carry === 1) {
    sum += carry;
  }
  return sum.split("").reverse().join("");
}

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
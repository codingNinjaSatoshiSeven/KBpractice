/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  var sa = split(a);
  var sb = split(b);
  var real = sa.real * sb.real - sa.imaginary * sb.imaginary;
  var imaginary = sa.real * sb.imaginary + sa.imaginary * sb.real;
  return real+"+"+imaginary+"i";
};

function split(str) {
  var [ real, imaginary ]= str.split("+");
  imaginary = imaginary.replace("i", "");
  return {
    real: +real,
    imaginary: +imaginary,
  }
}

console.log(complexNumberMultiply("1+-1i", "1+-1i"));
console.log(complexNumberMultiply("1+1i", "1+1i"));
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  s = s.split("");
  var r = false;
  for (var i = 0; i < s.length; i = i+k) {
    if ( i % k === 0) r = !r;
    if (r) {
      if (i+k-1 >= s.length) {
        reverse(s, i, s.length-1);
      } else {
        reverse(s, i, i+k-1);
      }
    }
  }
  return s.join("");
};

function reverse(s, i, j) {
  for (var a = i; a <= Math.floor((j- i) /2) + i; a++) {
    var temp = s[a];
    s[a] = s[j-a+i];
    s[j-a+i] = temp;
  }
}

console.log(reverseStr("abcdefg", 2));
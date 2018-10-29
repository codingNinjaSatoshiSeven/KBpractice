/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
  var d = (+(""+N)).toString(2);
  var last = null, max = 0;
  for (var i = 0; i < d.length; i++) {
    if (d[i] === "1") {
      if (last === null) {
        last = i;
      } else {
        max = Math.max(max, i - last);
        last = i;
      }
    }
  }
  return max;
};

console.log(binaryGap(22));
console.log(binaryGap(5));
console.log(binaryGap(6));
console.log(binaryGap(8));
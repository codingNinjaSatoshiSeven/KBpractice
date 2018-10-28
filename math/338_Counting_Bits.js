///TODO: REVIEW
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  var res = [0];
  for (var i = 1; i <= num; i++) {
    if (i %2 === 0) {
      res.push(res[i/2]);
    } else {
      var index = Math.floor(i/2);
      res.push(res[index]+1);
    }
  }
  return res;
};

console.log(countBits(5));
console.log(countBits(2));
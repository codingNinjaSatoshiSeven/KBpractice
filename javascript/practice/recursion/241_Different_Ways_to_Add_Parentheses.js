/// TODO: REVIEW
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  var ans = [];
  for (var i = 0, len = input.length; i < len; i++) {
    var item = input[i];
    if (item === '+' || item === '-' || item ==='*') {
      var left = diffWaysToCompute(input.substring(0, i));
      var right = diffWaysToCompute(input.substring(i + 1));
      left.forEach(function(a) {
        right.forEach(function(b) {
          ans.push(eval('(' + a + ')' + item + '(' + b + ')'));
        });
      });
    }
  }

  !ans.length && ans.push(+input);
  return ans;
};

console.log(diffWaysToCompute("2-1-1"));
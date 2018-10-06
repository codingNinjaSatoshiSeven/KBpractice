///TODO: REVIEW
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if(k === 0 || n === 0) return [];
  var result = [], output = [];
  recurse(result, output, n, k, 1);
  return result;
};

function recurse(result, output, n, k, cur) {
  if (output.length === k) {
    result.push(output.slice());
    return;
  }
  if (cur > n) return;
  output.push(cur);
  recurse(result, output, n, k, cur+1);
  output.pop();
  recurse(result, output, n, k, cur+1);
}

console.log(combine(4,2));
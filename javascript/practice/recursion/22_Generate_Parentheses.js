/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var l = n, r = n;
  var results = [];
  recurse(l, r, n, '', results);
  return results;
};

function recurse(l, r, n, temp, results) {
  if (l === 0 && r === 0) {
    results.push(temp);
    return;
  }
  if (l !== 0 && r !== 0) {
    recurse(l-1, r, n, temp+'(', results);
    if (r > l) {
      recurse(l, r-1, n, temp+')', results);
    }  
  } else if (l === 0) {
    recurse(l, r-1, n, temp+')', results);
  } else {
    recurse(l-1, r, n, temp+'(', results);
  }
}

console.log(generateParenthesis(2));
console.log(generateParenthesis(3));

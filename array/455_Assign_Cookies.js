///TODO: REVIEW
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((a, b) => {
    return a-b;
  });
  s = s.sort((a, b) => {
    return a-b;
  });
  var j = 0;
  for (var i = 0; i < s.length && j < g.length; i++) {
    if (s[i] >= g[j]) j++;
  }
  return j;
};

console.log(findContentChildren([1,2,3], [1,1]));
console.log(findContentChildren([1,2], [1,2,3]));
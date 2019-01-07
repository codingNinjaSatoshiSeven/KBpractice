///TODO: REVIEW
/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
  return (new Set(
      A.map((word) => [...word].reduce((counter, c, i) => {
                                  counter[c.charCodeAt(0) - 'a'.charCodeAt(0) + (26 * (i % 2))]++;
                                  return counter;
                              }, (new Array(52)).fill(0)).join('-')
      )
  )).size;
};

console.log(numSpecialEquivGroups(["a","b","c","a","c","c"]));
console.log(numSpecialEquivGroups(["aa","bb","ab","ba"]));
console.log(numSpecialEquivGroups(["abc","acb","bac","bca","cab","cba"]));
console.log(numSpecialEquivGroups(["ababaa","aaabaa"]));
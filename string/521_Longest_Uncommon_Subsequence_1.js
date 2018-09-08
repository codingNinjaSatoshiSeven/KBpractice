///TODO: REVIEW
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  if (a === b) return -1;
  return Math.min(a.length, b.length);  
};

console.log(findLUSlength("aba", "cdc"));
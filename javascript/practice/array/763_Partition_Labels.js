///TODO: review
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  var last = {};
  for (let i = 0; i < S.length; i++) {
    last[S[i]] = i;
  }
  var j = 0, anchor = 0;
  var ans = [];
  for (let i = 0; i < S.length; i++) {
    j = Math.max(j, last[S[i]]);
    if(i === j) {
      ans.push(i-anchor+1);
      anchor = i+1;
    }
  }
  return ans;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
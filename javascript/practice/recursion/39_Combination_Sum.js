///TODO: REVIEW
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  var ans = [];
  candidates.sort((a, b) => {
    return a - b;
  });
  dfs(candidates, target, 0, [], ans);
  return ans;
};

function dfs(candidates, target, s, curr, ans) {
  if (target === 0) {
    ans.push(curr.slice());
    return;
  }
  for (var i = s; i < candidates.length; i++) {
    if(candidates[i] > target) {
      return;
    }
    curr.push(candidates[i]);
    dfs(candidates, target - candidates[i], i, curr, ans);
    curr.pop();
  }
}

console.log(combinationSum([2,3,6,7], 7));
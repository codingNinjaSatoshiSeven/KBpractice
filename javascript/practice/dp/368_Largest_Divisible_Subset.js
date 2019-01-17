///TODO: REVIEW
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  nums.sort((a,b) => {
    return a-b;
  });
  var dp = [], parent = [], res=[];
  for (var i = 0; i<nums.length; i++) {
    dp[i] = 0;
    parent[i] = 0;
  }
  var mx = 0, mxIndex = 0;
  for(var i = nums.length-1; i>=0; i--) {
    for(var j = i; j<nums.length; j++) {
      if(nums[j] % nums[i] === 0 && dp[i] < dp[j]+1) {
        dp[i] = dp[j]+1;
        parent[i] = j;
        if(mx <dp[i]) {
          mx = dp[i];
          mxIndex = i;
        }
      }
    }
  }
  for (var i = 0; i<mx; i++) {
    res.push(nums[mxIndex]);
    mxIndex = parent[mxIndex];
  }
  return res;
};

console.log(largestDivisibleSubset([1,2,3]));
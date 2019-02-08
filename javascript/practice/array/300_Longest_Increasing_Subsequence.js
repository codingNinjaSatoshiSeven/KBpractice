/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if(nums.length === 0) return 0;
  var dp = [1];
  for(var i = 1; i<nums.length; i++) dp[i] =0;
  var maxans = 1;
  for(var i = 1; i<dp.length; i++) {
    var maxval = 0;
    for(var j = 0; j<i; j++) {
      if(nums[i] > nums[j]) {
        maxval = Math.max(maxval, dp[j]);
      }
    }
    dp[i] = maxval +1;
    maxans = Math.max(maxans, dp[i]);
  }
  return maxans;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
///TODO: REVIEW
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  var sum = 0;
  for(var i = 0 ; i<nums.length; i++) {
    sum+= nums[i];
  }
  if (sum % 2 !== 0) return false;
  var target = sum /2;
  var dp=[true];
  for (var i = 1; i<=target;i++) {
    dp[i] = false;
  }
  for(var i = 0; i<nums.length; i++) {
    var num = nums[i];
    for(var j = target; j>=num; j--) {
      dp[j] = dp[j] || dp[j-num];
    }
  }
  return dp[target];
};

console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));
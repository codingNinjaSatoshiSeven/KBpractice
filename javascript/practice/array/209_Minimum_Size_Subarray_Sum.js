/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  var res = Number.POSITIVE_INFINITY, left = 0, sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    while(left <=i && sum >=s) {
      res = Math.min(res, i-left+1);
      sum -= nums[left];
      left++;
    }
  }
  return res === Number.POSITIVE_INFINITY ? 0: res;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
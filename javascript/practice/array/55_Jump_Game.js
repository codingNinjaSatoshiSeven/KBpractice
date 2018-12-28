/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  var n = nums.length;
  var reach =0;
  for (var i=0; i< n; i++) {
    if (i> reach || reach >= n-1) break;
    reach = Math.max(reach, i+nums[i])
  }
  return reach >= n-1;
};

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
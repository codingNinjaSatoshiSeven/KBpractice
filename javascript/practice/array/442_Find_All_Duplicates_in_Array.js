/// TODO: REVIEW
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  var res = [];
  for (var i = 0; i < nums.length; i++) {
    var idx = Math.abs(nums[i]) - 1;
    if (nums[idx] < 0) res.push(idx +1);
    nums[idx] = - nums[idx];
  }
  return res;
};
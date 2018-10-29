/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums || nums.length === 0) return 0;
  if (nums.length ===1) return nums[0];
  if (nums.length ===2) return Math.max(nums[0], nums[1]);
  var result = [nums[0],Math.max(nums[0], nums[1])];
  for (var i = 2; i < nums.length; i++) {
    var a = result[i - 2] + nums[i];
    var b = result[i - 1] + 0;
    result[i] = Math.max(a, b);
  }
  return result[nums.length-1];
};

console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));
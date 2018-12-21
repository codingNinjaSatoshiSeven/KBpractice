/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  var closest = nums[0] + nums[1] + nums[2];
  var diff = Math.abs(closest - target);
  nums = nums.sort((a,b) => {
    return a-b;
  });
  for (var i = 0; i < nums.length - 2; i++) {
    var left = i+1;
    var right = nums.length -1;
    while(left < right) {
      var sum = nums[i] + nums[left] + nums[right];
      var newDiff = Math.abs(sum-target);
      if (diff > newDiff) {
        diff = newDiff;
        closest = sum;
      }
      if (sum < target) ++left;
      else --right;
    }
  }
  return closest;
};

console.log(threeSumClosest([-1, 2, 1, -4]));
///TODO REVIEW
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length === 0) return [];
  nums.sort(function(a, b){
    return a-b;
  });

  if (nums[nums.length-1] < 0) return [];
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i-1] === nums[i]) continue;
    var target = 0 - nums[i];
    var start = i+1, end = nums.length -1;
    while (start < end) {
      if (nums[start] + nums[end] === target) {
        result.push([nums[i], nums[start], nums[end]]);
        while(start < end && nums[start] === nums[start+1]) start++;
        while(start < end && nums[end] === nums[end-1]) end--;
        start++;
        end--;
      } else if (nums[start] + nums[end] < target) {
        start++;
      } else {
        end--;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
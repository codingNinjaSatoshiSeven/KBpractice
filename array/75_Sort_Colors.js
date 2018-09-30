///TODO: REVIEW
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var l = 0, r = nums.length -1;
  var i = 0;
  while ( i <= r ) {
    if (nums[i] ===0) {
      var temp = nums[l];
      nums[l] = nums[i];
      nums[i] = temp;
      i++;
      l++;
    } else if (nums[i]===1) {
      i++;
    } else {
      var temp = nums[r];
      nums[r]= nums[i];
      nums[i] = temp;
      r--;
    }
  }
};
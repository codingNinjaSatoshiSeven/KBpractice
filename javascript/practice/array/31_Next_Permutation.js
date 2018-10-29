///TODO: REVIEW
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  var i = nums.length - 2;
  while ( i >=0 && nums[i+1] <= nums[i]) {
    i--;
  }
  if (i >= 0) {
    var j = nums.length - 1;
    while ( j >=0 && nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }
  reverse(nums, i+1);
};

function swap(nums, a, b) {
  var temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

function reverse(nums, start) {
  var i = start, j = nums.length -1;
  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
}
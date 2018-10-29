/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  var n = k;
  while (n > 0) {
    var temp = nums.pop();
    nums.unshift(temp);
    n--;
  }
};

rotate([1,2,3,4,5,6,7],3);

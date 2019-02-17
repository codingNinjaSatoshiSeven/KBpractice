/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  var res = nums[0], n = nums.length;
  var f = [], g = [];
  for(var i = 0; i<n; i++) {
    f[i]=0;
    g[i]=0;
  }
  f[0]=nums[0];
  g[0]=nums[0];
  for(var i =1; i<n; i++) {
    f[i] = Math.max(f[i - 1] * nums[i], g[i - 1] * nums[i], nums[i]);
    g[i] = Math.min(f[i - 1] * nums[i], g[i - 1] * nums[i], nums[i]);
    res = Math.max(res, f[i]);
  }
  return res;
};

console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([-2,0,-1]));
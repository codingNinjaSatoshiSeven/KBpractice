/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  var res = 0, n = nums.length, sum = 0;
  var m = {};
  m[0]=-1;
  for(var i = 0; i < n; i++) {
    sum +=(nums[i] ===1) ? 1 : -1;
    if(m[sum] !== undefined) {
      res = Math.max(res, i-m[sum]);
    } else {
      m[sum] = i;
    }
  }
  return res;
};

console.log(findMaxLength([0,1,0]));
console.log(findMaxLength([0,1]));
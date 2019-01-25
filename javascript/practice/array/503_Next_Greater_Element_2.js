/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  var n = nums.length;
  var res = [];
  for (var i = 0; i< n ;i++) {
    res[i] = -1;
  }
  for(var i = 0; i< n; i++) {
    for(var j = i+1; j<i+n; j++) {
      if(nums[j%n] > nums[i]) {
        res[i] = nums[j%n];
        break;
      }
    }
  }
  return res;
};

console.log(nextGreaterElements([1,2,1]));
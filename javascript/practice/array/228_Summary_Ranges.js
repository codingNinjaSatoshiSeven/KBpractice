/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  var res = [];
  var i = 0, n = nums.length;
  while(i <n) {
    var j = 1;
    while(i+j<n && nums[i+j] - nums[i] === j) j++;
    res.push(j<=1 ? String(nums[i]) : nums[i]+"->"+nums[i+j-1]);
    i+=j;
  }
  return res;
};

console.log(summaryRanges([0,1,2,4,5,7]));
console.log(summaryRanges([0,2,3,4,6,8,9]));
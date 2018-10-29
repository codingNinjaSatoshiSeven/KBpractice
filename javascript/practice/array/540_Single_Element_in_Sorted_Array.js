/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  var l = 0, r = nums.length;
  while(l < r) {
    var m = Math.floor((r + l ) /2);
    var n = m % 2 === 0 ? m+1 : m-1;
    if(nums[n] === nums[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return nums[l];
};

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));
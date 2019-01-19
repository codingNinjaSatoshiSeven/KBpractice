/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  var third = Number.MIN_SAFE_INTEGER;
  var s = [];
  for (var i = nums.length-1; i>=0; i--) {
    if(nums[i] < third) return true;
    else {
      while (s.length >0 && nums[i] >s[s.length-1]) {
        third = s.pop();
      }
    }
    s.push(nums[i]);
  }
  return false;
};

console.log(find132pattern([1,2,3,4]));
console.log(find132pattern([3,1,4,2]));
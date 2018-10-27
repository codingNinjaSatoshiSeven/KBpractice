/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  var cur = nums[0];
  if(nums.length ===1) return cur;
  for (var i = 1; i < nums.length; i++) {
    var n = nums[i];
    if (n < cur) {
      return n;
    } else {
      n = cur;
    }
  }
  return n;
};
console.log(findMin([3,4,5,1,2] ));
console.log(findMin([4,5,6,7,0,1,2] ));
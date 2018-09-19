/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <=2) return nums.length;
  var first = nums[0], second = nums[1];
  var i = 2; 
  while (i < nums.length) {
    var cur = nums[i];
    if (first === second && second === cur) {
      // remove, don't increment i
      nums.splice(i, 1);
    } else {
      // don't remove, increment i, adjust 1st and 2nd
      first = nums[i-1];
      second = nums[i];
      i++;
    }
  }
  return nums.length;
};

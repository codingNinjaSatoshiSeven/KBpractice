///TODO: REVIEW
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var one = 0, two = 0, three = 0;
  for (var i = 0; i < nums.length; i++) {
    two |= one & nums[i];
    one ^= nums[i];
    three = one & two;
    one &= ~three;
    two &= ~three;
  }
  return one;
};

console.log(singleNumber([0,1,0,1,0,1,99]));
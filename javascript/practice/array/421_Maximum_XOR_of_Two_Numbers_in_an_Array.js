///TODO: OPTIMIZE
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  var max = 0;
  for (var i = 0; i< nums.length; i++) {
    for (var j=1; j< nums.length; j++) {
      var num = nums[i] ^ nums[j];
      if (num  > max) max = num;
    }
  }
  return max;
};

console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]));
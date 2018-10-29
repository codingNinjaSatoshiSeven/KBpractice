///TODO: Review
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  // move = sum – n * min;
  var sum = 0, min = Number.POSITIVE_INFINITY, n = nums.length;
  for ( var i = 0; i < n; i++) {
    sum += nums[i];
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return sum - n * min;
};

console.log(minMoves([1,2,3]));
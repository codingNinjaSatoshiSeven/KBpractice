///TODO: Review
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  for(let i = 0; i<nums.length; i++) {
    var sum = nums[i];
    for(let j = i+1; j < nums.length; j++) {
      sum += nums[j];
      if(sum === k) return true;
      if(k !== 0 && sum % k === 0) return true;
    }
  }
  return false;
};
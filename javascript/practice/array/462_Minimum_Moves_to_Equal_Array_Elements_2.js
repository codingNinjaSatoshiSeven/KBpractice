/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  var m = 0, n = nums.length -1, res = 0;
  nums.sort((a,b) => {return a-b});
  while(m < n) {
    res += nums[n] - nums[m];
    n--;
    m++;
  }
  return res;
};

console.log(minMoves2([1,2,3]));
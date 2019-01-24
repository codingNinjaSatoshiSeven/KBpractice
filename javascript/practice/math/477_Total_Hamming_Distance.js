/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
  var res = 0, n = nums.length;
  for(var i = 0; i<32; i++) {
    var count = 0;
    for (var j=0; j<n; j++) {
      var num = nums[j];
      if(num &(1<<i)) count++;
      // count the 1s
    }
    // for each digit, the hamming = # of 1s X # of 0s
    res += count * (n-count);
  }
  return res;
};

console.log(totalHammingDistance([4, 14, 2]));
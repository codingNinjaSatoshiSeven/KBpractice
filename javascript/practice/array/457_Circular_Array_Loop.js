///TODO: REVIEW
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
  var n = nums.length;
  for(var i =0;i<n;i++) {
    if(nums[i]===0) continue;
    var cur = nums[i];
    nums[i]=0;
    var next = (cur+i+n) %n;
    if(next === i) continue;
    while(cur * nums[next] >0) {
      cur = nums[next];
      nums[next] = 0;
      next = (next + cur+n) %n;
    }
    if(next === i) return true;
  }
  return false;
};
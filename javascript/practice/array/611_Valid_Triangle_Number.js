/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  var count = 0;
  nums.sort((a,b)=> {
    return a-b;
  });
  for(var i =0; i<nums.length-2; i++) {
    var k = i +2;
    for(var j = i+1; j<nums.length-1&& nums[i] !== 0; j++) {
      while(k <nums.length && nums[i] + nums[j] > nums[k]) {
        k++;
      }
      count+=k-j-1;
    }
  }
  return count;
};

console.log(triangleNumber([2,2,3,4], 3));
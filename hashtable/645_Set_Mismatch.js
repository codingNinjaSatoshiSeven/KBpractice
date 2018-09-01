/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  var map = {};
  var sum = 0;
  var one, another;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    if(!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
      one = nums[i];
    }
  }
  var target = (1+ nums.length)* nums.length / 2;
  another = target - sum + one; 
  return [ one, another ];
};

console.log(findErrorNums([1,2,2,4]));
console.log(findErrorNums([1,1]));
///TODO:REVIEW
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  var two = 0;
  for(var i=0;i<nums.length;i++) {
    two ^= nums[i];
  }
  var pos = 1;
  two = two.toString(2);
  for(var i = two.length -1; i>=0;i--) {
    if(two[i] === '1') {
      break;
    }
    pos *=2;
  }
  var half1 = 0, half2=0;
  for(var i = 0; i<nums.length; i++) {
    if(nums[i] & pos) {
      half1 ^=nums[i];
    } else {
      half2 ^=nums[i];
    }
  }
  return [half1, half2];
};

console.log(singleNumber([1,2,1,3,2,5]));
console.log(singleNumber([0,0,1,2]));
console.log(singleNumber([2,1,2,3,4,1]));
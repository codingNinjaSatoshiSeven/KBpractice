/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var prod = 1, zero = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zero++;
    }
    if (nums[i] !== 0) {
      prod *= nums[i];
    }
  }
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    if (zero > 1) {
      result.push(0);
    } else if (zero === 1) {
      if (nums[i] === 0) result.push(prod);
      else result.push(0);
    } else {
      if (nums[i] === 0) result.push(prod);
      else result.push(prod / nums[i]);
    }
  }
  return result;
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([0, 0]));
console.log(productExceptSelf([0, 1]));
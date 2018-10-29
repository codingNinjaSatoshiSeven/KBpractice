/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  var f = Number.MIN_SAFE_INTEGER;
  var s = f, t = f;
  for (var i = 0; i < nums.length; i++) {
    var val = nums[i];
    if(val > f) {
      t = s;
      s = f;
      f = val;
    } else if (val > s && val !== f) {
      t = s;
      s = val;
    } else if (val > t && val !== s && val !==f) {
      t = val;
    }
  }
  return t !== Number.MIN_SAFE_INTEGER ? t: f;
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([1,2,2,5,3,5]));
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  var p = Infinity, q = p;
  for (var i = 0; i < nums.length; i++) {
    var a = nums[i];
    if(a <=p) p = a;
    else if (a <q) q = a;
    else if (a >q) return true;
  }
  return false;
};

console.log(increasingTriplet([1,2,3,4,5]));
console.log(increasingTriplet([2,4,3,1,5]));
console.log(increasingTriplet([5,4,3,2,1]));
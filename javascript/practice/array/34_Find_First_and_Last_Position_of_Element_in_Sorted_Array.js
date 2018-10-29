///TODO: REVIEW
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 0) return [-1, -1];
  var index = extremeBinarySearch(nums, target, true);
  if (index === nums.length || nums[index] !== target) return [-1, -1];
  var otherIndex = extremeBinarySearch(nums, target, false) -1;
  return [index, otherIndex];
};

function extremeBinarySearch(nums, target, left) {
  var lo = 0, hi = nums.length;
  while (lo < hi) {
    var mid = Math.floor((lo+hi) /2);
    if (nums[mid] > target || (left && target === nums[mid])) {
      hi = mid;
    } else {
      lo = mid+1;
    }
  }
  return lo;
}

console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5,7,7,8,8,10], 6));
console.log(searchRange([1,4], 4));
console.log(searchRange([0,0,1,1,1,2,2,3,3,3,4,4,4,4,5,5,6,6,6,8,10,10], 4));
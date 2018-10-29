///TODO: REVIEW
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  return searchRotatedSortedArray(nums, 0, nums.length-1, target);
};

function searchRotatedSortedArray(nums, start, end, target) {
  if (start > end) return -1;
  var mid = start + Math.floor((end - start) /2);
  if (nums[mid] === target) return mid;

  if(nums[mid] < nums[end]) {
    if (target > nums[mid] && target <= nums[end]) {
      return searchRotatedSortedArray(nums, mid+1, end, target);
    } else {
      return searchRotatedSortedArray(nums, start, mid-1, target);
    }
  } else {
    if(target >= nums[start] && target < nums[mid]) {
      return searchRotatedSortedArray(nums, start, mid-1, target);
    } else {
      return searchRotatedSortedArray(nums, mid+1, end, target);
    }
  }
}
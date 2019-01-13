/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var start = 0, end = nums.length -1;
  while (start <= end) {
    var mid = Math.ceil((start+ end)/2);
    console.log("mid>>>", mid);
    if(nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      start = mid+1;
    } else {
      end = mid-1;
    }
    console.log("start>>", start, end)
  }
  return -1;
};

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 2));
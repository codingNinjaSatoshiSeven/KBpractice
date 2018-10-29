///TODO: review
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  var turtle = nums[0];
  var hare = nums[0];
  while (true) {
    turtle = nums[turtle];
    hare = nums[nums[hare]];
    if(turtle === hare) break;
  }
  var pt1 = nums[0];
  var pt2 = turtle;
  while (pt1 !== pt2) {
    pt1 = nums[pt1];
    pt2 = nums[pt2];
  }
  return pt1;
};

console.log(findDuplicate([1,3,4,2,2]));
console.log(findDuplicate([3,1,3,4,2]));
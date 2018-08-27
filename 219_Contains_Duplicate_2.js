/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var map = {};
  for (var i =0; i<nums.length; i++) {
    if (!(nums[i] in map)) {
      map[nums[i]] = [i];
    } else {
      map[nums[i]].push(i);
    }
  }
  for (var key in map) {
    if (map[key].length >1) {
      var arr = map[key];
      for (var i =1; i< arr.length; i++) {
        if (Math.abs(arr[i] - arr[i-1]) <= k) {
          return true;
        }
      }
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3));
console.log(containsNearbyDuplicate([1,0,1,1], 1));
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));

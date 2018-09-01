/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  var count = {};
  for (var i = 0; i < nums.length; i++) {
    var val = nums[i];
    if (!count[val]) {
      count[val] = 1;
    } else {
      count[val]++;
    }
  }
  var max = 0;
  for (var key in count) {
    key = +key;
    if (count[key-1]) {
      max = Math.max(max, count[key-1]+ count[key]);
    }
    if (count[key+1]) {
      max = Math.max(max, count[key+1]+ count[key]);
    }
  }
  return max;
};

var a = [1,3,2,2,5,2,3,7];
console.log(findLHS(a));
a = [1,1,1,1];
console.log(findLHS(a));
a = [-1,0,-1,0,-1,0,-1];
console.log(findLHS(a));
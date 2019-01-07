/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  if(!nums || nums.length ===0) return [];
  var res = [];
  var out = [];
  nums.sort((a, b) => a-b);
  getSubsets(nums, 0, out, res);
  return res;
};

function getSubsets(nums, pos, out, res1) {
  res1.push(out.slice());
  for (var i = pos; i<nums.length; i++) {
    out.push(nums[i]);
    getSubsets(nums, i+1, out, res1);
    out.pop();
    while(i+1 < nums.length && nums[i] === nums[i+1]) i++;
  }
}

console.log(subsetsWithDup([1,2,2]))
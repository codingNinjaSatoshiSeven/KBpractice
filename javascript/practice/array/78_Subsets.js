///TODO REVIEW
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var results = [];
  recurse(nums, 0, [], results);
  return results;
};

function recurse(nums, index, cur, results) {
  if (index === nums.length) {
    results.push(cur.slice());
    return;
  } else {
    recurse(nums, index+1, cur, results);
    cur.push(nums[index]);
    recurse(nums, index+1, cur, results);
    cur.pop();
  }
}
console.log(subsets([1,2,3]));
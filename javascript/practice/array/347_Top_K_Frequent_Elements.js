/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var map = {}, arr = [], results = [];
  for (var i = 0; i < nums.length; i++) {
    var val = nums[i];
    if (!map[val]) {
      map[val] =1;
    } else {
      map[val]++;
    }
  }
  for (var key in map) {
    var kk = +key;
    var c = map[key];
    if(!arr[c]) {
      arr[c] = [kk];
    } else {
      arr[c].push(kk);
    }
  }
  var count = 0;
  for (var i = arr.length -1; i >=0 && count <k; i--) {
    if(arr[i]) {
      count += arr[i].length;
      results = results.concat(arr[i]);
    }
  }
  return results;
};

console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([3,0,1,0], 1));
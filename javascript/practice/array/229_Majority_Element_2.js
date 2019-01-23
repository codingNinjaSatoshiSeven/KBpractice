/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  var res = [];
  var m = 0, n = 0, countM = 0, countN = 0;
  for(var i = 0; i<nums.length; i++) {
    var val = nums[i];
    if(val === m) countM++;
    else if (val === n) countN++;
    else if (countM === 0) {
      m = val;
      countM = 1;
    } else if (countN === 0) {
      n = val;
      countN =1;
    } else {
      countM--;
      countN--;
    }
  }
  countM = countN = 0;
  for(var i = 0; i<nums.length; i++) {
    var val = nums[i];
    if(val===m) countM++;
    else if(val === n) countN++;
  }
  if(countM>nums.length /3) res.push(m);
  if(countN>nums.length/3) res.push(n);
  return res;
};

console.log(majorityElement([2,3,3]));
console.log(majorityElement([1,1,1,3,3,2,2,2]));
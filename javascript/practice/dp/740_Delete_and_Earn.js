///TODO: REVIEW
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  var count = [];
  for(var i = 0; i<10001; i++) {
    count[i]=0;
  }
  for(var i = 0; i< nums.length; i++) {
    var x = nums[i];
    count[x]++;
  }
  var avoid = 0, using = 0, prev = -1;
  for(var k = 0; k<=10000; k++) {
    if(count[k]>0) {
      var m = Math.max(avoid, using);
      if(k-1 !== prev) {
        using = k * count[k] + m;
        avoid = m;
      } else {
        using = k * count[k] + avoid;
        avoid = m;
      }
      prev = k;
    }
  }
  return Math.max(avoid, using);
};
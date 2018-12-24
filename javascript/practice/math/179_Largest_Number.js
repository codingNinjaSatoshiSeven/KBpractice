/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  var res="";
  nums.sort(cmp);
  var result = nums.join('');

  return parseInt(result) === 0 ? '0' : result;
};

var cmp = function(a,b){
  return ('' + a + b) > ('' + b + a) ? -1 : 1;
}

console.log(largestNumber([3,30,34,5,9]));
console.log(largestNumber([10,2]));
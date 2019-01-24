/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  var res = arr.slice();
  while(res.length >k) {
    if(x - res[0] <= res[res.length-1] - x){
      res.pop();
    } else {
      res.shift();
    }
  }
  return res;
};

console.log(findClosestElements([1,2,3,4,5], 4, 3));
console.log(findClosestElements([1,2,3,4,5], 4, 1));
///TODO: REVIEW
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var l = 0, r = height.length -1;
  var max = 0;
  while ( l < r) {
    max = Math.max(max, (r-l) * Math.min(height[l] , height[r]));
    if (height[l] < height[r]) l++;
    else r--;
  }
  return max;
};

console.log(maxArea([1, 3, 2, 4]));
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  let copy = heights.slice();
  copy.sort((a,b) => a-b);
  let count = 0;
  for(let i = 0; i < heights.length; i++) {
    if(heights[i] !== copy[i]) count++;
  }
  return count;
};

console.log(heightChecker([1,1,4,2,1,3]));
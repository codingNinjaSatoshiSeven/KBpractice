/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(!matrix || matrix.length ==0 || matrix[0].length===0) return false;
  var m = matrix.length, n = matrix[0].length;
  if(target< matrix[0][0] || target > matrix[m-1][n-1]) return false;
  var left = 0, right = m -1;
  while(left <=right) {
    var mid = Math.floor((left+right)/2);
    if(matrix[mid][0] === target) return true;
    else if (matrix[mid][0]<target) left = mid+1;
    else right = mid -1;
  }
  var tmp = right;
  left = 0;
  right = n-1;
  while(left <=right) {
    var mid = Math.floor((left+right)/2);
    if(matrix[tmp][mid] === target) return true;
    else if (matrix[tmp][mid]<target) left = mid+1;
    else right = mid -1;
  }
  return false;
};

console.log(searchMatrix([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 3));
console.log(searchMatrix([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 13));
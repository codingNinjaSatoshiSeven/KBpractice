/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  this.matrix = matrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  var sum = 0;
  for(let i = row1; i <= row2; i++) {
    for(let j = col1; j <= col2; j++) {
      sum += this.matrix[i][j];
    }
  }
  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
let matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

var a = new NumMatrix(matrix);
console.log(a.sumRegion(2, 1, 4, 3)); //8
console.log(a.sumRegion(1, 1, 2, 2)); //11
console.log(a.sumRegion(1, 2, 2, 4)); //12

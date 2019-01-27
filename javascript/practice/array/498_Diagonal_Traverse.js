/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length ===0) return [];
  var res = [], m = matrix.length, n = matrix[0].length, r = 0, c = 0, k = 0;
  var dirs = [[-1, 1], [1, -1]];
  for (var i = 0; i < m*n ; i++) {
    res[i] = matrix[r][c];
    r+= dirs[k][0];
    c+= dirs[k][1];
    if(r>=m) {
      r = m-1;
      c += 2;
      k = 1 - k;
    }
    if(c >=n) {
      c = n-1;
      r+=2;
      k = 1 - k;
    }
    if(r<0) {
      r = 0;
      k = 1 - k;
    }
    if (c <0) {
      c = 0;
      k = 1 - k;
    }
  }
  return res;
};

console.log(findDiagonalOrder([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ]));
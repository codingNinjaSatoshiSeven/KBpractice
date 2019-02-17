///TODO: REVIEW
/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
  var R = A.length, C = A[0].length;
  var colsums = [];
  for(var r = 0; r<R;r++) {
    for(var c = 0; c<C; c++) {
      colsums[c] += A[r][c];
    }
  }
  var ans = 0;
  for(var state = 0; state<(1<<R); state++) {
    if(state>0) {
      var trans = state ^ (state-1);
      for(var r = 0; r<R; r++) {
        if(((trans>>r)&1)>0) {
          for(var c = 0; c<C; c++) {
            colsums[c] += A[r][c] === 1? -1:1;
            A[r][c] ^=1;
          }
        }
      }
    }
    var score = 0;
    for(var c = 0; c<C;c++) {
      score +=Math.max(colsums[c], R- colsums[c]) *(1<<(C-1-c));
      ans = Math.max(ans,score);
    }
  }
  return ans;
};
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  var minIndex = -1, min = Number.POSITIVE_INFINITY;
  var res = [];
  for(var i =0;i<A.length;i++) {
    var abs = Math.abs(A[i]);
    if(Math.abs(A[i]) <= min) {
      min = abs;
      minIndex = i;
    }
  }
  res.push(min*min);
  var i=minIndex-1, j = minIndex+1;

  while(i>=0 || j <A.length) {
    if(i>=0 && j <A.length) {
      var absI = Math.abs(A[i]);
      var absJ = Math.abs(A[j]);
      if(absI <= absJ) {
        res.push(absI * absI);
        i--;
      } else {
        res.push(absJ * absJ);
        j++;
      }
    } else if (i>=0) {
      res.push(A[i]*A[i]);
      i--;
    } else {
      res.push(A[j]*A[j]);
      j++;
    }
  }
  return res;
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));
console.log(sortedSquares([-1,1]));
console.log(sortedSquares([1,2,3,4]));
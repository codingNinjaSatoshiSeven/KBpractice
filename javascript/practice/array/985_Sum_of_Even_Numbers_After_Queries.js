/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  var sum = [], initSum = 0;
  for(var i = 0; i<A.length; i++) {
    if(A[i] %2===0) {
      initSum += A[i];
    }
  }
  for(var i = 0 ;i < queries.length;i++) {
    var index = queries[i][1];
    var val = queries[i][0];
    var oldA = A[index];
    var newA = oldA + val;
    if(oldA %2===0) { // initially even
      if(newA %2===0 ) {
        initSum = initSum -oldA +newA;
      } else {
        initSum = initSum -oldA;
      }
    } else { // initially odd
      if(newA %2===0 ) {
        initSum = initSum +newA;
      } else {
        // do Nothing
      }
    }
    A[index] = newA;
    sum.push(initSum);
  }
  return sum;
};

console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]));
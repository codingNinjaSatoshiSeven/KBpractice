///TODO: REVIEW
/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  var count = 0, sum = 0;
  for(var i = 2; i<A.length; i++) {
    if(A[i] - A[i-1] === A[i-1] - A[i-2]) {
      count++;
    } else {
      sum += (count+1)* count /2;
      count=0;
    }
  }
  return sum +=count * (count+1) /2;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
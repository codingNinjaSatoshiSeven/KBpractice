/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  var j = 1;
  for(var i = 0; i<A.length; i+=2) {
    if(A[i]%2 ===1) {
      while(A[j] %2 ===1) {
        j+=2;
      }
      var temp = A[i];
      A[i] = A[j];
      A[j] = temp;
    }
  }
  return A;
};

console.log(sortArrayByParityII([4,2,5,7]));
console.log(sortArrayByParityII([3,1,4,2]));
//TODO: REVIEW
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  var n = T.length;
  var res = [];
  for(var i=0;i<n; i++) res[i]= 0;
  var stack = [];
  for(var i = 0; i< n; i++) {
    while(stack.length !==0 && T[i] > T[stack[stack.length-1]]) {
      var t = stack[stack.length-1];
      stack.pop();
      res[t] = i - t;
    }
    stack.push(i);
  }
  return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
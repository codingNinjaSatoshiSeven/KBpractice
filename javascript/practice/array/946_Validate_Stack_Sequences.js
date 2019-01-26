///TODO: REVIEW
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  var j = 0, stack = [];
  for (var i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);
    while(stack.length >0 && j < popped.length && stack[stack.length-1] ===popped[j]) {
      stack.pop();
      j+=1;
    }
  }
  return j === popped.length;
};

console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]));